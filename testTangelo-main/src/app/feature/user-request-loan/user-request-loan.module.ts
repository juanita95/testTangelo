// modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRequestLoanRoutingModule } from './user-request-loan-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialDesignerModule} from "../../material-designer/material-designer.module";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

// components

import {UserRequestLoanComponent} from "./user-request-loan.component";

@NgModule({
  declarations: [
    UserRequestLoanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignerModule,
    ReactiveFormsModule,
    SharedModule,
    UserRequestLoanRoutingModule
  ]
})
export class UserRequestLoanModule { }
