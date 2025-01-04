import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { Discountoffers } from '../../models/discountoffers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  clientName:string = "Ihab"
  product: Store = new Store(
    'H&M',
    'https://placehold.co/300x300',
    ['Cairo, Alex, Mansoura'],
    Discountoffers.tenPercentage
  );
}
