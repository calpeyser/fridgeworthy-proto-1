import { createAction, props } from '@ngrx/store'

import { Comment } from '../creation/creation'

export const add_reply = createAction(
    '[Primary Comment] add reply',
    props<{'creationId' : Number, 'primaryCommentIndex' : Number, 'reply' : Comment}>()
)