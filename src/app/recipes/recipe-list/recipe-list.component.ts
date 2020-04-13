import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe',
    'This is simply a test',
    `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit` +
    `.com%2Frecipe%2Fslow-roast-gochujang-chicken&psig=AOvVaw2vWFcaEpiVCYtgwBinvbza&ust=` +
    `1586090706180000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCbzMbmzugCFQAAAAAdAAAAABAP`),
    new Recipe('A test Recipe',
      'This is simply a test',
      `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonappetit` +
      `.com%2Frecipe%2Fslow-roast-gochujang-chicken&psig=AOvVaw2vWFcaEpiVCYtgwBinvbza&ust=` +
      `1586090706180000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCbzMbmzugCFQAAAAAdAAAAABAP`)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
