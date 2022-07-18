import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertsService} from "./alerts.service";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient,
    public alertService: AlertsService,
  ) {
  }

  get(url: string, error: string, customHeader?: any): Promise<any> {
    return this.http
      .get(url, customHeader)
      .toPromise()
      .then((data) => this.handleResult(data))
      .catch(() => this.handleError(error));
  }

  post(url: string, body: any, error: string, customHeader?: any): Promise<any> {
    return this.http
      .post(url, body, customHeader)
      .toPromise()
      .then((data) => this.handleResult(data))
      .catch(() => this.handleError(error));
  }

  put(url: string, body: any, error: string, customHeader?: any): Promise<any> {
    return this.http
      .put(url, body, customHeader)
      .toPromise()
      .then((data) => this.handleResult(data))
      .catch(() => this.handleError(error));
  }

  path(url: string, body: any, error: string, customHeader?: any): Promise<any> {
    return this.http
      .patch(url, body, customHeader)
      .toPromise()
      .then((data) => this.handleResult(data))
      .catch(() => this.handleError(error));
  }

  delete(url: string, error: string, customHeader?: any): Promise<any> {
    return this.http
      .delete(url, customHeader)
      .toPromise()
      .then((data) => this.handleResult(data))
      .catch(() => this.handleError(error));
  }

  private handleResult(data: any): Promise<any> {
    return Promise.resolve(data);
  }

  private handleError(error: string): void {
    if (!error) {
      return;
    }
    this.alertService.showError(error);
  }

}
