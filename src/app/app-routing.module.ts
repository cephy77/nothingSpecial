import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: ':id', component: ItemComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
