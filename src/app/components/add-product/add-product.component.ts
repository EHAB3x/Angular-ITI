import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  categories !: ICategory[];

  constructor(private _ApiCategoriesService : ApiCategoriesService){}

  ngOnInit(): void {
    this._ApiCategoriesService.getAllCategories().subscribe({
      next:(cats)=>{
        this.categories = cats
      }
    });
  }


}
