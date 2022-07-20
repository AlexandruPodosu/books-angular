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
            title: "Test3",
            description: "Descriere3",
            price:40
         },
         {
            id:3,
            title: "Test4",
            description: "Descriere4",
            price:20
         },
         {
            id:4,
            title: "Test5",
            description: "Descriere5",
            price:60
         },
         {
            id:5,
            title: "Test6",
            description: "Descriere6",
            price:10
         },
         {
            id:6,
            title: "Test7",
            description: "Descriere7",
            price:10
         },
         {
            id:5,
            title: "Test8",
            description: "Descriere8",
            price:10
         },
         {
            id:5,
            title: "Test9",
            description: "Descriere9",
            price:10
         },
      
         
    ] 
    getProduct(){
        return this.productss;
    }
}