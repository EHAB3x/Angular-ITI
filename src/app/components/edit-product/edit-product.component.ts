import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ApiProductsService } from '../../services/api-products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit{
  currentId !: number;
  categories!: ICategory[];
  newEditedProduct: IProduct = {} as IProduct;

  constructor(
    private _ApiCategoriesService: ApiCategoriesService,
    private _ApiProductsService: ApiProductsService,
    private router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this._ApiCategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.categories = res
      }
    })

    this._ActivatedRoute.paramMap.subscribe((param)=>{
      this.currentId = Number(param.get('prdId'));

      this._ApiProductsService.getProductById(this.currentId).subscribe({
        next:(res)=>{
          this.newEditedProduct = res
        },
        error:()=>{
          alert("This Product Is Not Found")
        }
      })
    })
  }

  updateProduct(){
    this._ApiProductsService.updateProductById(this.currentId, this.newEditedProduct).subscribe({
      next:()=>{
        alert("Product Updated Successfully");
        this.router.navigateByUrl("dashboard/products")
      },
      error:(err)=>{
        alert(err)
      }
    })
  }
}
