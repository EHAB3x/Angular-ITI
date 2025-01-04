import { Discountoffers } from './discountoffers';

export class Store {
  name: string = '';
  imgUrl: string = '';
  branches: string[] = [''];
  discount: Discountoffers = Discountoffers.noDiscount;

  constructor(
    name: string,
    imgUrl: string,
    branches: string[],
    discount: Discountoffers
  ) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.branches = branches;
    this.discount = discount
  }
}
