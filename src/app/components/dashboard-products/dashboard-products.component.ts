import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { IProduct } from '../../models/iproduct';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.css',
})
export class DashboardProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(
    private _ApiProductsService: ApiProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
    });
  }

  deleteProduct(id: number) {
    this._ApiProductsService.deleteProductById(id).subscribe({
      next: () => {
        this.products = this.products.filter((prd) => prd.id !== id);
        alert('Product Deleted Successfully');
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  navigateToEdit(id: number) {
    this.router.navigate(['dashboard/edit-product', id]);
  }
}
