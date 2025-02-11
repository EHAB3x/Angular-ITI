import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 20000,
        quantity: 3,
        imgUrl: 'https://placehold.co/100',
        catId: 1,
      },
      {
        id: 200,
        name: 'HP Laptop',
        price: 25000,
        quantity: 0,
        imgUrl: 'https://placehold.co/100',
        catId: 1,
      },
      {
        id: 300,
        name: 'Iphone',
        price: 60000,
        quantity: 2,
        imgUrl: 'https://placehold.co/100',
        catId: 2,
      },
      {
        id: 400,
        name: 'Redmi',
        price: 10000,
        quantity: 1,
        imgUrl: 'https://placehold.co/100',
        catId: 2,
      },
      {
        id: 500,
        name: 'Samsung Tablet',
        price: 35000,
        quantity: 0,
        imgUrl: 'https://placehold.co/100',
        catId: 3,
      },
      {
        id: 600,
        name: 'Lenovo Tablet',
        price: 12000,
        quantity: 4,
        imgUrl: 'https://placehold.co/100',
        catId: 3,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | null {
    let foundedPrd = this.products.find((prd) => prd.id == id);
    return foundedPrd ? foundedPrd : null;
  }

  getProductByCatId(catId: number): IProduct[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((prd) => prd.catId == catId);
    }
  }

  mapProductsToIds(): number[]{
    return this.products.map((prd)=> prd.id);
  }
}
