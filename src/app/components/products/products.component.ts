import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { NationalIdPipe } from '../../pipes/national-id.pipe';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';
import { SquarePipe } from '../../pipes/square.pipe';
import { StaticProductsService } from '../../services/static-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective, SquarePipe, NationalIdPipe, CreditCardPipe],
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
  @Output() onProductAdded: EventEmitter<IProduct>;
  @Output() onTotalPriceChanged: EventEmitter<number>

  constructor(private _StaticProductsService: StaticProductsService) {

    this.products = _StaticProductsService.getAllProducts();

    this.filteredProducts = this.products;

    this.onProductAdded = new EventEmitter<IProduct>;

    this.onTotalPriceChanged = new EventEmitter<number>
  }

  buy(count: string, item: IProduct) {
    // this.totalOrderPrice = Number(count) * price;
    // this.totalOrderPrice = parseInt(count) * price;
    if (+count <= item.quantity) {
      this.totalOrderPrice += +count * item.price;
      // Fire Event
      this.onProductAdded.emit({...item, userCount:+count});
      this.onTotalPriceChanged.emit(this.totalOrderPrice);
      item.quantity -= +count;
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
    // this.filterProducts();
    this.filteredProducts= this._StaticProductsService.getProductByCatId(this.receivedCatId);
  }

  // filterProducts() {
  //   if (this.receivedCatId == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter(
  //       (prd) => prd.catId == this.receivedCatId
  //     );
  //   }
  // }
}
