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
  <div *ngFor="let currentMeal of childMealList | calories:filterByCalories" class="meal-list">
    <div *ngIf="currentMeal.calories > 500" class="panel panel-danger">
      <div class="panel-heading"><p class="panel-head-text">{{currentMeal.name}}</p> Calories: {{currentMeal.calories}}</div>
      <div class="panel-body">
        <p>{{currentMeal.details}}</p>
        <button class="edit-button"(click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
      </div>
    </div>

    <div *ngIf="currentMeal.calories > 250 && currentMeal.calories <= 500" class="panel panel-default">
    <div class="panel-heading"><p class="panel-head-text">{{currentMeal.name}}</p> Calories: {{currentMeal.calories}}</div>
      <div class="panel-body">
        <p>{{currentMeal.details}}</p>
        <button class="edit-button"(click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
      </div>
    </div>

    <div *ngIf="currentMeal.calories <= 250" class="panel panel-success">
    <div class="panel-heading"><p class="panel-head-text">{{currentMeal.name}}</p> Calories: {{currentMeal.calories}}</div>
      <div class="panel-body">
        <p>{{currentMeal.details}}</p>
        <button class="edit-button"(click)="editButtonHasBeenClicked(currentMeal)">Edit!</button>
      </div>
    </div>
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
