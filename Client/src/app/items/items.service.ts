import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from '../Models/recipes';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl = 'https://localhost:7299/recipebook/';
  item?: Recipes;

  constructor(private http: HttpClient) { }

  getItems()
  {
    return this.http.get<Recipes[]>(this.baseUrl+ 'recipe');
  }

  getItemById(id: number){
    console.log(this.baseUrl+'recipe/'+id);
    // https://localhost:7299/recipebook/recipe/1
    // 'https://localhost:7299/recipebook/Recipe/id?id=1

    return this.http.get<Recipes>(this.baseUrl+'Recipe/id?id='+id);

  }
}
