import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model.ts'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, merge, concat, combineLatest } from 'rxjs/operators';

export enum UserType {
    VIEWER, CREATOR, CONNECTOR
}

export interface User {
    uid: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    description: string,
    type: UserType,
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user: Observable<User>;


    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) { 
        this.user = this.afAuth.authState.pipe(
            switchMap(usr => {
                if (usr) {
                    return this.afs.doc<User>(`creators/${usr.uid}`).valueChanges().pipe(
                        switchMap(creator => {
                            if (creator) {
                                return of(creator)
                            } else {
                                return this.afs.doc<User>(`viewers/${usr.uid}`).valueChanges().pipe(
                                    switchMap(viewer => {
                                        if (viewer) {
                                            return of(viewer)
                                        } else {
                                            return this.afs.doc<User>(`connectors/${usr.uid}`).valueChanges()
                                        }
                                    })
                                )
                            }
                        })
                    )
                } else {
                    return of(null)
                }
            }),
        )
    }

    async signUp(user : User, password : string) {
        this.afAuth
            .createUserWithEmailAndPassword(user.email, password)
            .then(res => {
                user.uid = res.user.uid
                var doc : AngularFirestoreDocument;

                switch(user.type) {
                    case UserType.VIEWER: {
                        doc = this.afs.collection("viewers").doc(user.uid)
                        break
                    }
                    case UserType.CREATOR: {
                        doc = this.afs.collection("creators").doc(user.uid)
                        break
                    }
                    case UserType.CONNECTOR: {
                        doc = this.afs.collection("connectors").doc(user.uid)
                        break
                    }
                }
                doc.set(user)
            })
            .catch(error => {
                console.log("Sign up failed: ", error.message)
            })
    }

    signIn(email: string, password: string) : Promise<auth.UserCredential> {
        return this.afAuth.signInWithEmailAndPassword(email, password)
    }

    signOut() {
        this.afAuth.signOut()
    }

}