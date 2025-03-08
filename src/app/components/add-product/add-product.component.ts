import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  categories!: ICategory[];
  newProduct: IProduct = {} as IProduct;

  constructor(
    private _ApiCategoriesService: ApiCategoriesService,
    private _ApiProductsService: ApiProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._ApiCategoriesService.getAllCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      },
    });
  }

  addNewProduct() {
    this._ApiProductsService.addProduct(this.newProduct).subscribe({
      next: () => {
        alert('Done');
        this.router.navigateByUrl("/dashboard")
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
