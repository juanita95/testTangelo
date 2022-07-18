export class LoanRequestModel {
  name: string = '';
  document!: number;
  email: string = '';
  id: number = 0;
  valueLoan!: number;
  isLoanActive: boolean | string = false;
  endDate: Date | string = new Date();
}

