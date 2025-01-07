import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductsComponent, FormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: ICategory[];
  selectedCatId: number = 0;
  receivedTotalPrice: number = 0;

  constructor(){
        this.categories = [
          {
            id: 1,
            name: 'Laptop',
          },
          {
            id: 2,
            name: 'Mobile',
          },
          {
            id: 3,
            name: 'Tablet',
          },
        ];
  }

  calcTotalPrice(top: number){
    this.receivedTotalPrice = top
  }
}
