import { Injectable } from '@angular/core';
export interface Icart {
  prod: object;
  ammount: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  items = [];
  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }
  // checkCart(arr) {
  //   for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  //     console.log(element);
  //   }
  // }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
