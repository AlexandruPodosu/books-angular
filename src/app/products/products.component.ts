import { Component, OnInit } from '@angular/core';
import { productsService } from '../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Products[] = [];
  constructor(private productsService: productsService) {

   }

  ngOnInit(): void {
    this.products= this.productsService.getProduct();
  }

}
export interface Products{
  id: number;
  title: string;
  description: string;
  price: number;
}