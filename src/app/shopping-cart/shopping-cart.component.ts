import { Component, OnInit } from '@angular/core';
import { cartServices } from '../services/cart.service';
import { Products } from '../products/products.component';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items: Products[] = [];
  constructor(public cartService: cartServices) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  removeItem(index: number) {
    this.cartService.removeItem(index);
}

}

