import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Injectable } from "@angular/core";
@Injectable({providedIn: "root"})
@Pipe({
  name: 'checkoutPrice'
})
export class CustomPipe implements PipeTransform {
  constructor(private ShoppingCartComponent: ShoppingCartComponent) { }
  finalPrice: number = 0;
  i: number = 0;
  transform(value: number[]): any {
    if(this.finalPrice == 0){
    for(this.i=0;this.i<value.length;this.i++)
    {
      this.finalPrice +=value[this.i];
    }
    return this.finalPrice;
  }else if(this.finalPrice > 0){
      this.finalPrice = this.finalPrice - this.ShoppingCartComponent.returnPriceToDecrase();
      return this.finalPrice;
  }

} 

}
