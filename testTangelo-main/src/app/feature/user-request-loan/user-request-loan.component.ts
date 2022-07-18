import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JdBaseComponent} from "../../shared/controllers/jd-base.component";
import {JdBaseService} from "../../shared/services/jd-base.service";
import {LoanRequestComponent} from "../../shared/common-components/utils/loan-request/loan-request.component";
import {LoanRequestModel} from "../models/loan-request.model";
import {LoanService} from "../services/loan.service";
import {ValidatorsService} from "../../shared/services/validators.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-request-loan',
  templateUrl: './user-request-loan.component.html',
  styleUrls: ['./user-request-loan.component.scss']
})
export class UserRequestLoanComponent extends JdBaseComponent implements OnInit {

  @ViewChild(LoanRequestComponent) LoanRequestForm: any;
  public loanRequest: LoanRequestModel = new LoanRequestModel();
  public canGetValuesLoan: boolean = false;
  public form: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private loanService: LoanService,
    private router: Router,
    protected jdBaseService: JdBaseService,
    public validatorS: ValidatorsService,
  ) {
    super(jdBaseService);
    this.buildForm();
  }

  ngOnInit(): void {
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
      name: ['', [Validators.required]],
      document: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.validatorS.regexEmail)]],
    });
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
   * Validates all form fields and return the corresponding alert msg
   */
  public setAlertMsg(): string {
    let msg = ''
    if (this.checkError('name', 'required')) {
      msg = 'Debe ingresar el nombre del usuario';
    }
    if ((this.checkError('document', 'required'))) {
      msg = 'Debe ingresar el documento de identidad';
    }
    if ((this.checkError('email', 'required'))) {
      msg = 'Debe ingresar el correo electrónico';
    }
    if ((this.checkError('email', 'pattern'))) {
      msg = 'Debe ingresar un correo electrónico valido';
    }
    return msg;
  }

  /**
   * catch data of inputs
   */
  async sendData(): Promise<void> {
    if (!this.LoanRequestForm.personalDataForm.valid) return;
    const endDate = this.LoanRequestForm.personalDataForm.value.endDate
      ? new Date(this.LoanRequestForm.personalDataForm.value.endDate).toISOString()
      : '';
    this.loanRequest.name = this.form.value.name;
    this.loanRequest.document = this.form.value.document;
    this.loanRequest.email = this.form.value.email;
    this.loanRequest.valueLoan = this.LoanRequestForm.personalDataForm.value.valueLoan;
    this.loanRequest.endDate = endDate;
    await this.createLoan(this.loanRequest);
  }

  /**
   * send data to endpoint
   */
  async createLoan(loanClient: LoanRequestModel): Promise<void> {
    const validateLoan = Boolean(Math.round(Math.random()));
    validateLoan ? await this.acceptLoan(loanClient) : this.rejectLoan();
  }

  /**
   * reject loan
   */
  rejectLoan(): void {
    this.alertService.showError('El crédito solicitado ha sido rechazado');
  }

  /**
   * accept loan
   */
  async acceptLoan(loanClient: LoanRequestModel): Promise<void> {
    await this.loanService.postLoanClient(loanClient);
    this.alertService.showSuccess('El crédito solicitado ha sido aceptado');
    this.loanService.canReloadLoanUser.next(true);
    await this.router.navigateByUrl('inicio/lista');
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
   * show next page if data in form is correct else show alerts
   */
  next(): void {
    this.canGetValuesLoan = !this.canGetValuesLoan;
    this.form.valid
      ? this.sendData()
      : this.showErrorsInAlert();
  }

}
