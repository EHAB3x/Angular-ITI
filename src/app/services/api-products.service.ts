import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.baseUrl}/products/${id}`);
  }

  getProductsByCatId(catId: number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
  }

  addProduct() {}

  deleteProductById() {}

  updateProductById() {}
}
