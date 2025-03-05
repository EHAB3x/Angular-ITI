import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product: IProduct | null = null;
  idsArr !: number[];
  currentIdIndex: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ApiProductsService: ApiProductsService,
    private _Location: Location,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this._ApiProductsService.getAllProducts().subscribe({
      next:(products)=>{
        this.idsArr = products.map((prd)=> prd.id)
      }
    })

    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentId = Number(paramMap.get('id'));
      this._ApiProductsService.getProductById(this.currentId).subscribe({
        next: (res) => {
          this.product = res;
        },

        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  goBack() {
    this._Location.back();
  }

  goPrevious() {
    this.currentIdIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (this.currentIdIndex != 0) {
      this.router.navigateByUrl(
        `details/${this.idsArr[this.currentIdIndex - 1]}`
      );
    }
  }

  goNext() {
    this.currentIdIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (this.currentIdIndex != this.idsArr.length - 1) {
      this.router.navigateByUrl(
        `details/${this.idsArr[this.currentIdIndex + 1]}`
      );
    }
  }
}
