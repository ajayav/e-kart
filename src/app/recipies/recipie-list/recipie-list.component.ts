import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies : Recipie[] = [
    new Recipie('Beef Steak', 'Full of flavor', 'https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/red-meats-&-red-meat-dishes/beef-steak-with-peppercorn-gravy/beef-steak-with-peppercorn-gravy-main.jpg'),
  
    new Recipie('Chicken Curry', 'Kerala Style', 'https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-1.jpg'),];

  constructor() { }

  ngOnInit(): void {
  }

}
