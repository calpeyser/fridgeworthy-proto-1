import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CreationPageComponent } from '../creation-page/creation-page.component';
import { CreatorPageComponent } from '../creator-page/creator-page.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'creation/:id', component: CreationPageComponent },
  { path: 'creator/:id', component: CreatorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }