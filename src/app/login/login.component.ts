import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl=new FormControl('', [Validators.required, Validators.minLength(15)]);
  hide = true;
  email: string ="";
  password: string= "";
  constructor(private route: Router) { }
 
  ngOnInit(): void {
  }
  onLogin()
  {
    if(this.email === "test@test.com" && this.password === "aaaaaaaaaaaaaaa"){
      this.route.navigateByUrl('home');
      alert("Login succesfully!");
    }else{
      this.route.navigateByUrl('home');
      alert("Wrong");
    }
  }
}
