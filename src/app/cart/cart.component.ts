import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  check: boolean;
  bufer = [];
  constructor(public Cart: ShoppingCartService) {}

  ngOnInit(): void {
    this.bufer = this.Cart.getItems();
    if (this.bufer) {
      this.bufer.length !== 0 ? (this.check = true) : (this.check = false);
    } else {
      this.check = false;
    }
  }
  cleanCart() {
    this.Cart.clearCart();
  }
}
