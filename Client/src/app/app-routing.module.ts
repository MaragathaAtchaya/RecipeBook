import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { NewItemComponent } from './items/new-item/new-item.component';

const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'recipe',component:ItemsComponent},
  {path:'recipe/:id',component:ItemDetailsComponent},
  {path:'new-recipe',component:NewItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
