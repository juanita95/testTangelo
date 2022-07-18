import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {JdBaseComponent} from "../../../controllers/jd-base.component";
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {JdBaseService} from "../../../services/jd-base.service";
import {ValidatorsService} from "../../../services/validators.service";
import {environment} from "../../../../../environments/environment";
import {LoanService} from "../../../../feature/services/loan.service";

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent extends JdBaseComponent implements OnInit, OnChanges {

  @ViewChild('personalDataForm') personalDataForm: FormGroupDirective | any;
  @Input() canGetValuesInput: boolean = false;
  public form: FormGroup | any;
  public currentMoney: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    public validatorS: ValidatorsService,
    private loanService: LoanService,
    protected jdBaseService: JdBaseService,
  ) {
    super(jdBaseService);
    this.buildForm();
  }

  async ngOnInit(): Promise<void> {
    await this.getCurrentMoney();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.canGetValuesInput && changes.canGetValuesInput.firstChange) return;
    this.next();
  }

  /**
   * Validates the given field
   * @param fieldV
   */
  public invalidField(field: string): boolean {
    const validator = this.form.get(field);
    return validator?.touched && validator?.invalid;
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      valueLoan: ['', Validators.compose([
        Validators.required,
        Validators.min(this.validatorS.minLoan),
        Validators.max(this.validatorS.maxLoan),
        this.validatorS.hasBankMoney(this.currentMoney)
      ])],
      endDate: ['', []],
    });
  }

  /**
   * send value of loan request and end date
   */
  submit(): void {
    this.personalDataForm.ngSubmit.emit();
  }

  /**
   * Show errors if data in label inputs are incorrect
   */
  private showErrorsInAlert(): void {
    this.form.markAllAsTouched();
    const msg = this.setAlertMsg();
    this.alertService.showWarning(msg);
  }

  /**
   * Validates all form fields and return the corresponding alert msg
   */
  public setAlertMsg(): string {
    let msg = ''
      if (this.checkError('valueLoan', 'min')) {
        msg = 'El monto minimo a solicitar son $10.000';
      }
      if ((this.checkError('valueLoan', 'max'))){
        msg = 'El monto máximo a solicitar son $100.000';
      }
      if ((this.checkError('valueLoan', 'required'))){
        msg = 'Debe ingresar el monto a solicitar';
      }
      if(this.currentMoney < this.validatorS.minLoan) {
        msg = 'El banco no tiene capital';
      }
    return msg;
  }

  /**
   * get current money in bank
   */
  async getCurrentMoney(): Promise<void> {
    this.currentMoney = environment.currentMoneyValue - await this.loanService.getCurrentMoney();
  }

  /**
   *  Check errors
   *  @param controlName
   * @param errorName
   */
  public checkError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  /**
   * validate form
   */
  next(): void {
    if (!this.form.valid) this.showErrorsInAlert();
  }

}
