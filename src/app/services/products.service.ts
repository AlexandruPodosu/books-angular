import { Injectable } from "@angular/core";
import { Products } from "../products/products.component";
@Injectable({providedIn: "root"})
export class productsService {
    productss: Products[] = [
        {
            id:0,
            title: "Test1",
            description: "Descriere1",
            price:15
         },
         {
            id:1,
            title: "Test2",
            description: "Descriere2",
            price:19
         },
         {
            id:2,
            title: "Test2",
            description: "Descriere2",
            price:19
         },
         {
            id:3,
            title: "Test2",
            description: "Descriere2",
            price:19
         },
         {
            id:4,
            title: "Test2",
            description: "Descriere2",
            price:19
         },
         {
            id:5,
            title: "Test2",
            description: "Descriere2",
            price:19
         },
      
         
    ] 
    getProduct(){
        return this.productss;
    }
}