import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title:string = "Home title";
  buttonDisabled:boolean = false;
  color:string ="green";
  newTitle: String = "test";
  constructor() { }

  ngOnInit(): void {
  }
  changeButton() : void{
    
    this.color= "red";
  }
  changeTitle():void 
  {
    this.title ="New title";
  }
}
