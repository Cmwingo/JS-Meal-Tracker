import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="lowCalorie">Low Calorie Meals</option>
    <option value="highCalorie">High Calorie Meals</option>
  </select>
  <h3>Your Meals</h3>
  <div *ngFor="let currentMeal of childMealList | calories:filterByCalories" class="panel panel-default">
    <div class="panel-heading">{{currentMeal.name}} Calories: {{currentMeal.calories}}</div>
    <div class="panel-body">{{currentMeal.details}}</div>
    <button class="edit-button"(click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
}

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
