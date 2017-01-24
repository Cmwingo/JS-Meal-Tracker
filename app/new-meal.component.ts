import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
        <input class="form-control" type="text" placeholder="Your meal here" name="name" [(ngModel)]="meal.name" #name="ngModel" required>
      </div>
      <div class="form-group">
        <label>Enter Meal Details:</label>
        <input  class="form-control" placeholder="Details about your meal" name="details"  [(ngModel)]="meal.details" #details="ngModel" required>
      </div>
      <div class="form-group">
        <label>Enter Meal Calories:</label>
        <input type="number" min="0" class="form-control" placeholder="Calories" name="calories"  [(ngModel)]="meal.calories" #calories="ngModel" required>
      </div>
      <div class="form-group">
        <button type="submit" class="button btn-default">Submit</button>
      </div>
    </form>
  `
})

export class NewMealComponent implements OnInit {
  @Output() newMealSender = new EventEmitter();
  public meal: Meal;

  ngOnInit() {
    this.meal = {name: '', details: '', calories: 0};
  }

  submitForm(model: Meal) {
    this.newMealSender.emit(model);
  }

  // submitForm(name: string, details: string, calories: number) {
  //   var newMealToAdd: Meal = new Meal(name, details, calories);
  //   this.newMealSender.emit(newMealToAdd);
  // }
}
