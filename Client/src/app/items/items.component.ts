import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Recipes } from '../Models/recipes';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{

constructor(private itemService: ItemsService){}

recipes: Recipes[]=[];

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      {
        next: response=> this.recipes=response, 
        error: error =>console.log(error)
      }
    );
  }

}
