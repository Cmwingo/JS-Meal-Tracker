import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule,
              ReactiveFormsModule],
  declarations: [ AppComponent,
                    NewMealComponent,
                    MealListComponent,
                    EditMealComponent,
                    CaloriesPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
