import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
