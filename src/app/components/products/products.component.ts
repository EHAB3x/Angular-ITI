import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: IProduct[];
  categories: ICategory[];
  selectedCatId: number = 0;
  totalOrderPrice : number = 0;
  constructor(){
    this.products = [
      {
        id:100,
        name:"Dell Laptop",
        price: 20000,
        quantity: 3,
        imgUrl:"https://placehold.co/100",
        catId:1,
      },
      {
        id:200,
        name:"HP Laptop",
        price: 25000,
        quantity: 0,
        imgUrl:"https://placehold.co/100",
        catId:1,
      },
      {
        id:300,
        name:"Iphone",
        price: 60000,
        quantity: 2,
        imgUrl:"https://placehold.co/100",
        catId:2,
      },
      {
        id:400,
        name:"Redmi",
        price: 10000,
        quantity: 1,
        imgUrl:"https://placehold.co/100",
        catId:2,
      },
      {
        id:500,
        name:"Samsung Tablet",
        price: 35000,
        quantity: 0,
        imgUrl:"https://placehold.co/100",
        catId:3,
      },
      {
        id:600,
        name:"Lenovo Tablet",
        price: 12000,
        quantity: 4,
        imgUrl:"https://placehold.co/100",
        catId:3,
      },
    ]

    this.categories = [
      {
        id:1,
        name:"Laptop"
      },
      {
        id:2,
        name:"Mobile"
      },
      {
        id:3,
        name:"Tablet"
      },
    ]
  }

  buy(count:string, item:IProduct){
    // this.totalOrderPrice = Number(count) * price;
    // this.totalOrderPrice = parseInt(count) * price;
    if(+count <= item.quantity){
      this.totalOrderPrice += +count * item.price;
      item.quantity -= +count;
    }else{
      alert("Not enough quantity");
    }
  }

  change(){
    this.selectedCatId = 3
  }

  trackItem(index: number, item:IProduct){
    return item.id;
  }
}
