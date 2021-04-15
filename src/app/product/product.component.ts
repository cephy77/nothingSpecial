import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../shop/shop.component';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private productId: string;
  public product: Iproduct;

  constructor(
    private route: ActivatedRoute,
    private Cart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    // this.getProduct;
    // console.log(this.product);
    this.getProduct().then((product) => {
      this.product = product;
      for (let index = 0; index < this.product.length; index++) {
        const element = this.product[index];
        if (element.id === this.productId) {
          this.product = element;
        }
      }
    });
  }
  private getProduct(): Promise<Iproduct> {
    return fetch(
      'https://raw.githubusercontent.com/cephy77/webProject/main/data.json'
    ).then((response) => response.json());
  }
  buybtn(event?: MouseEvent) {
    let evtTarget = event ? (event.target as HTMLElement).className : '';
    evtTarget === 'product-cart' ? this.Cart.addToCart(this.product) : '';
  }
}
