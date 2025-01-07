import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipes/square.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective, SquarePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges{
  products: IProduct[];
  filteredProducts: IProduct[];
  totalOrderPrice: number = 0;
  // Pipes Variables for Testing
  myDate: Date = new Date();
  num: number = 4;
  // Inputs
  @Input() receivedCatId : number = 0;
  // Define Event
  @Output() onTotalPriceChanged:EventEmitter<number>;

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 20000,
        quantity: 3,
        imgUrl: 'https://placehold.co/100',
        catId: 1,
      },
      {
        id: 200,
        name: 'HP Laptop',
        price: 25000,
        quantity: 0,
        imgUrl: 'https://placehold.co/100',
        catId: 1,
      },
      {
        id: 300,
        name: 'Iphone',
        price: 60000,
        quantity: 2,
        imgUrl: 'https://placehold.co/100',
        catId: 2,
      },
      {
        id: 400,
        name: 'Redmi',
        price: 10000,
        quantity: 1,
        imgUrl: 'https://placehold.co/100',
        catId: 2,
      },
      {
        id: 500,
        name: 'Samsung Tablet',
        price: 35000,
        quantity: 0,
        imgUrl: 'https://placehold.co/100',
        catId: 3,
      },
      {
        id: 600,
        name: 'Lenovo Tablet',
        price: 12000,
        quantity: 4,
        imgUrl: 'https://placehold.co/100',
        catId: 3,
      },
    ];

    this.filteredProducts = this.products;

    this.onTotalPriceChanged = new EventEmitter<number>;
  }

  buy(count: string, item: IProduct) {
    // this.totalOrderPrice = Number(count) * price;
    // this.totalOrderPrice = parseInt(count) * price;
    if (+count <= item.quantity) {
      this.totalOrderPrice += +count * item.price;
      item.quantity -= +count;
      // Fire Event
      this.onTotalPriceChanged.emit(this.totalOrderPrice);
    } else {
      alert('Not enough quantity');
    }
  }

  change() {
    // this.selectedCatId = 3;
  }

  trackItem(index: number, item: IProduct) {
    return item.id;
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    if (this.receivedCatId == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (prd) => prd.catId == this.receivedCatId
      );
    }
  }
}
