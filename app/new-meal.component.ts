import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <hr>
    <form #newMealForm="ngForm" (ngSubmit)="submitForm(newMealForm.value)">
      <div class="form-group">
        <label>Enter Meal Name:</label>
        <input type="text" class="form-control" placeholder="Your meal here" name="name" ngModel required>
      </div>
      <div class="form-group">
        <label>Enter Meal Details:</label>
        <input #newDetails class="form-control" placeholder="Details about your meal" name="details"  ngModel required>
      </div>
      <div class="form-group">
        <label>Enter Meal Calories:</label>
        <input #newCalories class="form-control" placeholder="Calories" name="calories"  ngModel required>
      </div>
      <div class="form-group">
        <button type="submit" class="button btn-default">Submit</button>
      </div>
    </form>
  `
})

export class NewMealComponent {
  // @Output() newMealSender = new EventEmitter();

  submitForm(form: any): void{
    console.log(form);
  }

  // submitForm(name: string, details: string, calories: number) {
  //   var newMealToAdd: Meal = new Meal(name, details, calories);
  //   this.newMealSender.emit(newMealToAdd);
  // }
}
