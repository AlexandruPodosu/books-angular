import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl=new FormControl('', [Validators.required, Validators.minLength(15)]);
  hide = true;
  constructor() { }
 
  ngOnInit(): void {
  }

}
