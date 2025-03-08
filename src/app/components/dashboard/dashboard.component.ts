import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { IProduct } from '../../models/iproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  products !: IProduct[]
  constructor(private _ApiProductsService :ApiProductsService){}

  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res;
      }
    })
  }

}
