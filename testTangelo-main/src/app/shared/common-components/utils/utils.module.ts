// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialDesignerModule} from "../../../material-designer/material-designer.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControllersModule} from "../../controllers/controllers.module";
// components

import {LoanRequestComponent} from "./loan-request/loan-request.component";
import { CurrentValueLoanComponent } from './current-value-loan/current-value-loan.component';
import {TableComponent} from "./table/table.component";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {LanguageTable} from "../../services/languageTable-int";

@NgModule({
  declarations: [
    LoanRequestComponent,
    CurrentValueLoanComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignerModule,
    ControllersModule
  ],
  exports:[
    LoanRequestComponent,
    CurrentValueLoanComponent,
    TableComponent
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: TableComponent,
    useValue: LanguageTable()
  }],
})
export class UtilsModule { }
