import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list [childMealList]="masterMealList"></meal-list>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [];

  addMeal(newMeal: Meal) {
    this.masterMealList.push(newMeal);
  }
}
