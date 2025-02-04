import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateCommunityComponent } from './create-community/create-community.component';
import { JoinCommunityComponent } from './join-community/join-community.component';

const routes: Routes = [
  // {path:'landing-page', component:LandingPageComponent},
  {path:'createCommunity',component:CreateCommunityComponent},
  {path:'joinCommunity',component:JoinCommunityComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  // {path:'createCommunity', component:CreateCommunityComponent},
  {path:'**',redirectTo:'/landing-page',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
