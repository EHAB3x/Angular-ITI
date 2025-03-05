import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { NationalIdPipe } from '../../pipes/national-id.pipe';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';
import { SquarePipe } from '../../pipes/square.pipe';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightCardDirective,
    SquarePipe,
    NationalIdPipe,
    CreditCardPipe,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges, OnInit {
  products: IProduct[] = [] as IProduct[];
  filteredProducts: IProduct[] = [] as IProduct[];
  totalOrderPrice: number = 0;
  // Pipes Variables for Testing
  myDate: Date = new Date();
  num: number = 4;
  // Inputs
  @Input() receivedCatId: number = 0;
  // Define Event
  @Output() onProductAdded: EventEmitter<IProduct>;
  @Output() onTotalPriceChanged: EventEmitter<number>;

  constructor(
    private _ApiProductsService: ApiProductsService,
    private router: Router
  ) {
    this.onProductAdded = new EventEmitter<IProduct>();

    this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = this.products;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  buy(count: string, item: IProduct) {
    // this.totalOrderPrice = Number(count) * price;
    // this.totalOrderPrice = parseInt(count) * price;
    if (+count <= item.quantity) {
      this.totalOrderPrice += +count * item.price;
      // Fire Event
      this.onProductAdded.emit({ ...item, userCount: +count });
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
    this._ApiProductsService.getProductsByCatId(this.receivedCatId).subscribe({
      next: (res) => {
        this.filteredProducts = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
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

  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
