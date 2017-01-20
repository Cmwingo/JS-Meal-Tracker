import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
        <div *ngIf="childSelectedMeal">
          <h3>{{childSelectedMeal.name}} {{childSelectedMeal.brand}}</h3>
          <hr>
          <h3>Edit Meal</h3>
          <div class="form-group">
            <label>Enter Meal Name:</label>
            <input [(ngModel)]="childSelectedMeal.name" class="form-control"><br>
            <label>Enter Meal Details:</label>
            <input [(ngModel)]="childSelectedMeal.details" class="form-control"><br>
            <label>Enter Meal Calories:</label>
            <input [(ngModel)]="childSelectedMeal.calories" class="form-control"><br>
          </div>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
