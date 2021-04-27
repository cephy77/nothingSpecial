import { JsonPipe } from '@angular/common';
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
  sum = 0;
  constructor() {
    if (localStorage.length !== 0) {
      this.items = JSON.parse(localStorage.items);
    }
  }

  addToCart(product) {
    this.transformData(product);
    localStorage.items = JSON.stringify(this.items);
    console.log(localStorage.items);
  }
  transformData(product) {
    let n = 1;
    let cartItem = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      quantity: n,
    };
    this.countItems(cartItem);
  }
  countItems(cartItem) {
    let bool = false;
    if (this.items.length != 0) {
      this.items.forEach((element) => {
        if (cartItem.id === element.id) {
          ++element.quantity;
          bool = true;
        }
      });
      if (!bool) {
        this.items.push(cartItem);
      }
    } else {
      this.items.push(cartItem);
    }
    this.sumItems(cartItem);
  }
  sumItems(cartItem) {
    this.sum += cartItem.price;
  }
  getItems() {
    return this.items;
  }
  getSum() {
    return this.sum;
  }
  deleteItem(item) {
    let index = this.items.indexOf(item);
    this.sum -= item.price * item.quantity;
    this.items.splice(index, 1);
  }
  clearCart() {
    this.items = [];
    this.sum = 0;
    localStorage.items = JSON.stringify(this.items);
    return this.items;
  }
}
