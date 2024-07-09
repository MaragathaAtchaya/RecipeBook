import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Recipes } from '../Models/recipes';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{


constructor(private itemService: ItemsService, private toastr: ToastrService, private sanitizer: DomSanitizer){}

recipes: Recipes[]=[];
// imageUrl: any;
imageName: any;
imageUrls = new Map<string, SafeUrl>();


  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      {
        next: response=> this.recipes=response, 
        error: error =>console.log(error),
        complete: () => { 
          this.recipes.forEach(item => {
          console.log(item.imageName);
          if(item.imageName=="")
             item.imageName = "foods.png";

           this.loadImage(item.imageName);
        });
      }
      }
    );


   

//  this.loadImage("plate.jpg");
    
  }

  loadImage(fileName: string) {
    this.itemService.getImage(fileName).subscribe(response => {
      let objectURL = URL.createObjectURL(response);      
      let imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.imageUrls.set(fileName,imageUrl);
      console.log(fileName,imageUrl);
    });
  }

}
