import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router:Router){}
 login()
 {
  this.router.navigate(['/login'])
 }
 signup()
 {
  this.router.navigate(['/signup'])
 }
 createCommunity()
 {
  this.router.navigate(['/createCommunity'])
 }
 joinCommunity()
 {
  this.router.navigate(['/joinCommunity'])
 }
  

}


