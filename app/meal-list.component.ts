import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMealList">
      <p>Meal: {{currentMeal.name}}</p>
      <p>Details: {{currentMeal.details}}</p>
      <p>Calories: {{currentMeal.calories}}</p>
    </li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
}
