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
  Prices: any;
  constructor(private cartService: cartServices) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.Prices = this.GetPrices(this.items);
  }
  removeItem(index: number) {
    this.cartService.removeItem(index);
}
  GetPrices(products :Products[]){
     let preturi = products.map(a => a.price);
     return preturi
    
  }
  

}

