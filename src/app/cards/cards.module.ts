import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,FormsModule
  ]
})
export class CardsModule { }
