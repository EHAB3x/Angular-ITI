import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { IProduct } from '../../models/iproduct';

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
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _StaticProductsService: StaticProductsService
  ) {}

  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    this.product = this._StaticProductsService.getProductById(this.currentId);
  }
}
