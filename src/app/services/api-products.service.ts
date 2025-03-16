import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient,
    private _UserAuthService:UserAuthService
  ) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`,{
      headers:new HttpHeaders({
        "authorization": this._UserAuthService.getToken()
      })
    });
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  getProductsByCatId(catId: number): Observable<IProduct[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("catId",catId);
    searchParams = searchParams.append("limit",5);
    return this.httpClient.get<IProduct[]>(
      `${environment.baseUrl}/products`,{
        // params: new HttpParams().set("catId",catId),
        params: searchParams
      }
    );
  }

  addProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.baseUrl}/products`,
      newProduct
    );
  }

  deleteProductById(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  updateProductById(id: number, newProduct: IProduct): Observable<void> {
    return this.httpClient.put<void>(
      `${environment.baseUrl}/products/${id}`,
      newProduct
    );
  }
}
