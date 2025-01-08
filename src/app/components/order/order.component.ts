import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductsComponent, FormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  categories: ICategory[];
  selectedCatId: number = 0;
  receivedProducts: IProduct[] = [];
  totalOrderPrice: number = 0;

  constructor() {
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

  getProductsFromChild(prd: IProduct) {
    let productFound = false;
    for (let i = 0; i < this.receivedProducts.length; i++) {
      if (prd.id === this.receivedProducts[i].id) {
        if (prd.userCount) {
          this.receivedProducts[i].userCount =
            (this.receivedProducts[i].userCount || 0) + prd.userCount;
        }
        productFound = true;
        break;
      }
    }
    if (!productFound) {
      this.receivedProducts.push(prd);
    }
  }

  calcTotalPrice(top: number){
    this.totalOrderPrice = top;
  }

  removeProduct(productId: number) {
    this.receivedProducts = this.receivedProducts.filter(
      (prd) => prd.id !== productId
    );
  }
}
