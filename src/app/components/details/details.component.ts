import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product : IProduct | null = null;
  idsArr : number[];
  currentIdIndex: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _StaticProductsService: StaticProductsService,
    private _Location: Location,
    private router: Router
  ) {
    this.idsArr = this._StaticProductsService.mapProductsToIds();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId = Number(paramMap.get('id'));
      this.product = this._StaticProductsService.getProductById(this.currentId);
    })
    // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  goBack(){
    this._Location.back()
  }

  goPrevious(){
    this.currentIdIndex = this.idsArr.findIndex((id)=> id == this.currentId);
    if(this.currentIdIndex != 0){
      this.router.navigateByUrl(`details/${this.idsArr[this.currentIdIndex - 1]}`)
    }
  }

  goNext(){
    this.currentIdIndex = this.idsArr.findIndex((id)=> id == this.currentId);
    if(this.currentIdIndex != this.idsArr.length - 1){
      this.router.navigateByUrl(`details/${this.idsArr[this.currentIdIndex + 1]}`)
    }
  }
}
