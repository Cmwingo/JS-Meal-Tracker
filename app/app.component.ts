import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h2>Calories Today: {{dailyCalories}}</h2>
    <h3>Avg Calories: {{dailyCalories / this.masterMealList.length | number:'1.2-2'}}</h3>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('Latte', 'Great way to start the day', 150),
    new Meal('Cheese Danish', 'An indulgence for sure', 550)
  ];
  selectedMeal: Meal = null;
  dailyCalories: number = 700;
  avgCalories: number = this.dailyCalories / this.masterMealList.length;

  addMeal(newMeal: Meal) {
    console.log(typeof this.dailyCalories);
    console.log(typeof newMeal.calories);

    this.dailyCalories += parseFloat(newMeal.calories.toString());
    this.masterMealList.push(newMeal);
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
