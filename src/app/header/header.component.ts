import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartbool: boolean = false;
  menubool: boolean = false;
  phonebool: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  cartShow() {
    if (this.cartbool) {
      this.cartbool = false;
    } else {
      this.cartbool = true;
    }
  }
  menuShow() {
    if (this.menubool) {
      this.menubool = false;
    } else {
      this.menubool = true;
    }
  }
  phoneShow() {
    if (this.phonebool) {
      this.phonebool = false;
    } else {
      this.phonebool = true;
    }
  }
}
