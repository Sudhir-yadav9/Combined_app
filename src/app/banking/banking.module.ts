import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankingRoutingModule } from './banking-routing.module';
import { BankingComponent } from './banking.component';


@NgModule({
  declarations: [
    BankingComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule,FormsModule
  ]
})
export class BankingModule { }
