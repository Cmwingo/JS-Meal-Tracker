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

  <ul>
    <li *ngFor="let currentMeal of childMealList | calories:filterByCalories">
      <p>Meal: {{currentMeal.name}}</p>
      <p>Details: {{currentMeal.details}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
      <button class="edit-button"(click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
    </li>
  </ul>
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
