import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmiRoutingModule } from './emi-routing.module';
import { EmiComponent } from './emi.component';


@NgModule({
  declarations: [
    EmiComponent
  ],
  imports: [
    CommonModule,
    EmiRoutingModule,FormsModule
  ]
})
export class EmiModule { }
