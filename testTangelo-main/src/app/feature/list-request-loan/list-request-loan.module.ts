// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRequestLoanRoutingModule } from './list-request-loan-routing.module';
import {MaterialDesignerModule} from "../../material-designer/material-designer.module";

// components
import { ListRequestLoanComponent } from './list-request-loan.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ListRequestLoanComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignerModule,
    SharedModule,
    ListRequestLoanRoutingModule
  ]
})
export class ListRequestLoanModule { }
