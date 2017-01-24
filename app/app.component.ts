import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
    </div>
    <h1 class="title">Meal Tracker</h1>
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
    new Meal('Cheese Danish', 'An indulgence for sure', 550),
    new Meal('Mac & Cheese', "Good snack", 300)
  ];
  selectedMeal: Meal = null;
  dailyCalories: number = 1000;

  addMeal(newMeal: Meal) {

    this.dailyCalories += parseFloat(newMeal.calories.toString());
    this.masterMealList.push(newMeal);
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
  let calories: number = 0;
    for(let meal of this.masterMealList) {
      calories += parseFloat(meal.calories.toString());
    }
    this.dailyCalories = calories;
    this.selectedMeal = null;
  }
}
