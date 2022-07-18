import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRequestLoanComponent} from "./list-request-loan.component";

const routes: Routes = [
  {
    path: '',
    component: ListRequestLoanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRequestLoanRoutingModule { }
