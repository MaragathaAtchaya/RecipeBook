import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ItemsComponent,
    ItemDetailsComponent
  ]
})
export class ItemsModule { }
