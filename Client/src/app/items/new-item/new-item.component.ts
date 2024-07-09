import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from 'src/app/Models/recipes';
import { ItemsService } from '../items.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    imageName: ""
  };

  selectedFile?: File;

  constructor(private itemService: ItemsService, private router: Router, private toastr: ToastrService) { }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    }

    UploadImageAndAddItem() {
    const uploadData = new FormData();
    if(this.selectedFile){
      const imageName = this.selectedFile.name;

    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.itemService.uploadImage(uploadData).subscribe(response => {
        console.log(response);

        this.item.imageName = imageName;
        this.AddItem();

      });
  
      }  
    }
  
    AddItem() {
    this.itemService.addItem(this.item)
      .subscribe(() => {
        this.toastr.success('Recipe added successfully', "", {positionClass: 'toast-bottom-right'});
        console.log('Item added successfully');
        // timer(1500).subscribe(i=>
        // this.router.navigate(["/"]));
      });
    }


  onSubmit(): void {
    this.UploadImageAndAddItem();
  }

    




}
