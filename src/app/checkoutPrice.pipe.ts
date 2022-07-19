import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkoutPrice'
})
export class CustomPipe implements PipeTransform {
  finalPrice: number = 0;
  i: number = 0;
  transform(value: number[]): any {
    for(this.i=0;this.i<value.length;this.i++)
    {
      this.finalPrice +=value[this.i];
      console.log(this.finalPrice);
      console.log(value.length);
    }
    return this.finalPrice;
  }

}
