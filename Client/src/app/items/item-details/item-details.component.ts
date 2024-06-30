import { Component, OnInit } from '@angular/core';
import { Recipes } from 'src/app/Models/recipes';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit{

item?: Recipes;

constructor(private itemService: ItemsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadItem();
    
  }

  loadItem()
  {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.itemService.getItemById(+id).subscribe({
      next: resp=>this.item=resp,
      error: err=>console.log(err)
    })
  }

}
