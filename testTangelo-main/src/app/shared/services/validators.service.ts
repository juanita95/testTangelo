import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  private _regexEmail = '[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,3}$';
  private _minLoan: number = 10000;
  private _maxLoan: number = 100000;

  constructor( ) {}

  get regexEmail(): string {
    return this._regexEmail;
  }

  get minLoan(): number {
    return this._minLoan;
  }

  get maxLoan(): number {
    return this._maxLoan;
  }

  /**
   * Validates current value money bank
   */
  hasBankMoney(limit: number) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = this.minLoan <= limit ? {'noMoney':{hasMoney: false}} : null
      return value;
    }
  }
}
