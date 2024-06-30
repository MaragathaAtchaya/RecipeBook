import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { NewItemComponent } from './new-item/new-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemDetailsComponent,
    NewItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ItemsComponent,
    ItemDetailsComponent
  ]
})
export class ItemsModule { }
