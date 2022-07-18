import { Component, OnInit } from '@angular/core';
import {LoanRequestModel} from "../models/loan-request.model";
import {LoanService} from "../services/loan.service";

@Component({
  selector: 'app-list-request-loan',
  templateUrl: './list-request-loan.component.html',
  styleUrls: ['./list-request-loan.component.scss']
})
export class ListRequestLoanComponent implements OnInit {

  public users: LoanRequestModel[] = [];
  public columnsUser: string[] = ['name', 'valueLoan', 'isLoanActive'];
  public columnsNames: string[] = ['Nombre', 'valor', ''];

  constructor(private loanService: LoanService) { }

  async ngOnInit(): Promise<void> {
    await this.getUserLoan();
  }

  /**
   * get list loans
   */
  async getUserLoan(): Promise<void> {
    this.users = await this.loanService.getLoanClient();
    this.users = this.users.filter(user => user.isLoanActive === true);
    this.users.map((user) => {
      user.isLoanActive = 'Pagar';
    })
  }
  /**
   * update payment
   */
  async updatePayment(loanUser: LoanRequestModel): Promise<void> {
    const userLoan = {isLoanActive: false, valueLoan: 0};
    await this.loanService.updateLoanClient(userLoan, loanUser.id);
    this.loanService.canReloadLoanUser.next(true);
    await this.getUserLoan();
  }
}
