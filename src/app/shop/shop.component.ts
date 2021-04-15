import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
export interface Iproduct {
  [x: string]: any;
  id: string;
  img: string;
  title: string;
  shortDescription: string;
  description: string;
  oldPrice: string;
  price: number;
  availability: boolean;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public showcase: Iproduct[] = [];
  public addProduct: Iproduct;

  constructor(private Cart: ShoppingCartService) {}
  ngOnInit(): void {
    fetch('https://raw.githubusercontent.com/cephy77/webProject/main/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        this.showcase = data;
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  buybtn(product) {
    this.Cart.addToCart(product);
  }
}
