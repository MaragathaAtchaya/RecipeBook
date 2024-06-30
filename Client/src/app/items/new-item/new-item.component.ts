import { Component, Input } from '@angular/core';
import { Recipes } from 'src/app/Models/recipes';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {

  // item: Recipes = new RecipeC();

  today = new Date();
  item: Recipes = {
    id : 0,
    name: "",
    method: "",
    ingredients: "",
    authorName: "",
    date: this.today,
  };

  constructor(private itemService: ItemsService) { }

  onSubmit(): void {
    this.itemService.addItem(this.item)
      .subscribe(() => {
        console.log('Customer added successfully');
        // Optionally, navigate to a different component or handle success
      });
  }

}
