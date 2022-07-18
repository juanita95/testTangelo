import {Component, OnInit} from '@angular/core';
import {JdBaseComponent} from "../../../controllers/jd-base.component";
import {JdBaseService} from "../../../services/jd-base.service";
import {LoanService} from "../../../../feature/services/loan.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-current-value-loan',
  templateUrl: './current-value-loan.component.html',
  styleUrls: ['./current-value-loan.component.scss']
})
export class CurrentValueLoanComponent extends JdBaseComponent implements OnInit {

  public currentMoney: number = 0;

  constructor(
    protected jdBaseService: JdBaseService,
    private loanService: LoanService,
  ) {
    super(jdBaseService);
  }

  async ngOnInit(): Promise<void> {
    await this.getCurrentMoney();
    this.reloadCurrentMoney()
  }

  /**
   * get current money in bank
   */
  async getCurrentMoney(): Promise<void> {
    this.currentMoney = environment.currentMoneyValue - await this.loanService.getCurrentMoney();
  }

  /**
   * can reload current value money
   */
  reloadCurrentMoney(): void {
    this.subSink.add(
      this.loanService.canReloadLoanUser.subscribe(async (canReloadLoan: boolean) => {
        if (!canReloadLoan) return;
        await this.getCurrentMoney();
      })
    )
  }
}
