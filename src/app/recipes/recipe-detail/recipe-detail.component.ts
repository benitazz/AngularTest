import { Recipe } from './../recipe-list/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = { name : 'test', description : 'test', imagePath: 'image'};
  constructor() { }

  ngOnInit(): void {
  }

}
