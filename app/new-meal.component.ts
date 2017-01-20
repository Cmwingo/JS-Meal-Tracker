import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <hr>
    <div class="form-group">
      <label>Enter Meal Name:</label>
      <input #newName class="form-control">
      <label>Enter Meal Details:</label>
      <input #newDetails class="form-control">
      <label>Enter Meal Calories:</label>
      <input #newCalories class="form-control">
    </div>
    <div>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
