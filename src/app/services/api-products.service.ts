import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }

  getProductById(id: number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  getProductsByCatId(catId: number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`http://localhost:3000/products?catId=${catId}`)
  }

  addProduct() {}

  deleteProductById() {}

  updateProductById() {}
}
