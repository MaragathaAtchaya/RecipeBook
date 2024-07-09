import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { NewItemComponent } from './new-item/new-item.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemDetailsComponent,
    NewItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    }),
  ],
  exports:[
    ItemsComponent,
    ItemDetailsComponent
  ]
})
export class ItemsModule { }
