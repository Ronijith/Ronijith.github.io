import { Component, OnInit } from '@angular/core';
import { format } from 'path';
import {MatTabChangeEvent, MatTabLabel, MatTabsModule} from '@angular/material/tabs';
import { UserService } from '../user.service';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  get f() { return this.form.controls; }
  hide = true;
  public users:any = [];
  constructor(private _userService : UserService,private _route:Router,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.users  = this._userService.getUsers();
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.required],
    });
  }
  signin(){
    let gotEmail:string =(<HTMLInputElement>document.getElementById('email')!).value;
    let gotPass:string =(<HTMLInputElement>document.getElementById('pass')!).value;
    let index:number = 0;
    for(var i=0;i<this.users.length;i++){
      if(gotEmail === this.users[i].email && gotPass===this.users[i].password){
        localStorage.setItem('currentUser', JSON.stringify({ 'email': this.users[i].email, 'password': this.users[i].password,'user':this.users[i].user }));
        return this._route.navigate(['/home']);
        
      }
      else{
        if(i==this.users.length-1)
        return alert('Incorrect email or password');
      }
    }
  }

}
