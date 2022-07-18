import {Injectable} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {LoanRequestModel} from "../models/loan-request.model";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  public canReloadLoanUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpService) {}

  /**
   * get loans clients
   */

  async getLoanClient(): Promise<LoanRequestModel[]> {
    const result = await this.httpService.get(`${environment.usersUrl}`, 'No se ha podido obtener la lista de usuarios');
    return result;
  }

  /**
   * post a new loan
   */

  async postLoanClient(loan: LoanRequestModel): Promise<LoanRequestModel[]> {
    const result = await this.httpService.post(`${environment.usersUrl}`,loan, 'No se ha podido crear la solicitud');
    return result;
  }


  /**
   * update user loan payment
   */

  async updateLoanClient(loan: any, userId: number): Promise<LoanRequestModel[]> {
    const result = await this.httpService.path(`${environment.usersUrl}/${userId}`,loan, 'No se ha podido crear la solicitud');
    return result;
  }

  /**
   * get current money in bank
   */
  async getCurrentMoney(): Promise<number> {
    const usersLoans = await this.getLoanClient();
    let total = 0;
    for (const position in usersLoans) {
      total += usersLoans[position].valueLoan;
    }
    return total;
  }

}
