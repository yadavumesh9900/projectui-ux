import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _rout:ActivatedRoute,private formBuilder:FormBuilder){}
  reg!: FormGroup;
  id="";
  ngOnInit()
  {
    this._rout.params.subscribe(perms=>this.id=perms['id']);
    this.reg=this.formBuilder.group({
      id:[{value:this.id,disabled:true},[Validators.required]],
      name:['',[Validators.required]],
      ticket:['',[Validators.required]]

    })

    

  }
  
  login(){

  }

}
