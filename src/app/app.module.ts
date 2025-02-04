import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CreateCommunityComponent } from './create-community/create-community.component';
import { SearchCommunityComponent } from './search-community/search-community.component';
import { FooterComponent } from './footer/footer.component';
import { JoinCommunityComponent } from './join-community/join-community.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    CreateCommunityComponent,
    SearchCommunityComponent,
    FooterComponent,
    JoinCommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClientModule,ReactiveFormsModule]
})
export class AppModule { }
