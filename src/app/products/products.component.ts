import { Component, OnInit } from '@angular/core';
import { productsService } from '../services/products.service';
import { cartServices } from '../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Products[] = [];
  items: Products[] = [];

  constructor(private productsService: productsService, private cartService: cartServices) {
  
   }

  ngOnInit(): void {
    this.products= this.productsService.getProduct();
    this.items = this.cartService.getItems();
  }
  addToCart(product: Products){
    this.cartService.addToCart(product)
   }


}
export interface Products{
  id: number;
  title: string;
  description: string;
  price: number;
}