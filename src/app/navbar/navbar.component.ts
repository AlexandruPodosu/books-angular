import { Component, OnInit } from '@angular/core';
import { cartServices } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  numberOfitems:number = 0;

  constructor(private cartServices: cartServices) { }

  ngOnInit(): void {
  }
  getNumberOfItemes(){
    this.numberOfitems = this.cartServices.getItems().length;
    return this.numberOfitems;
  }

}
