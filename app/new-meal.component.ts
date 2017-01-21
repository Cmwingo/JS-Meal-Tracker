import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <hr>
    <form [formGroup]="newMealForm" (ngSubmit)="submitForm(complexForm.value)">
      <div class="form-group">
        <label>Enter Meal Name:</label>
        <input #newName class="form-control" placeholder="Your meal here" [formControl]="newMealForm.controls['mealName']">
      </div>
      <div class="form-group">
        <label>Enter Meal Details:</label>
        <input #newDetails class="form-control" placeholder="Details about your meal" [formControl]="newMealForm.controls['mealDetails']">
      </div>
      <div class="form-group">
        <label>Enter Meal Calories:</label>
        <input #newCalories class="form-control" placeholder="Calories" [formControl]="newMealForm.controls['mealCalories']">
      </div>
      <div class="form-group">
        <button type="submit" class="button btn-default">Submit</button>
      </div>
    </form>
  `
})

export class NewMealComponent {
  // @Output() newMealSender = new EventEmitter();

  newMealForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.newMealForm = fb.group({
      'mealName': "",
      'mealDetails': "",
      'mealCalories': ""
    })
  }

  submitForm(value: any){
    console.log(value);
  }

  // submitForm(name: string, details: string, calories: number) {
  //   var newMealToAdd: Meal = new Meal(name, details, calories);
  //   this.newMealSender.emit(newMealToAdd);
  // }
}
