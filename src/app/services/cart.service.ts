import { Products } from "../products/products.component";
import { Injectable } from "@angular/core";
@Injectable({providedIn: "root"})


export class cartServices {
   items: Products[] = [];

   addToCart(product: Products){
    this.items.push(product)
   }
   getItems() {
    return this.items;
   }
  clearCart() {
    this.items = [];
    return this.items;
   }
  removeItem(index: number){
    this.items.splice(index, 1);
   }
}
