import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';

const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'recipe',component:ItemsComponent},
  {path:'recipe/:id',component:ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
