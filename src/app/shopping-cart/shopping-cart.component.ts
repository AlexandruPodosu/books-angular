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
  Prices: number[] =[];
  priceToDecrease: number = 0;
  
  constructor(private cartService: cartServices) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.Prices = this.GetPrices(this.items);
  }
  removeItem(index: number) {
    this.priceToDecrease = this.Prices[index];
    this.cartService.removeItem(index);
    this.Prices =this.GetPrices(this.items); 
}
  GetPrices(products :Products[]){
     let preturi = products.map(a => a.price);
     return preturi;
  }
  returnPriceToDecrase(){
    return this.priceToDecrease;
  }
  

}

