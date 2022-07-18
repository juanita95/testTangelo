import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptor implements CustomHttpInterceptor {

  public valuesOnCall: number = 0;

  constructor(
    public loadingService: LoadingService,
  ) {
  }

  /**
   * intercept interceptor to refresh token and errors control
   * @param request request to send
   * @param next next request step
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.setLoading(true);
    const headers = new HttpHeaders({
        'token': 'YUGYGYVHJ9'
      });
    const reqClone = request.clone({headers});
    this.valuesOnCall++;
    return next.handle(reqClone).pipe(
      finalize(() => {
        this.valuesOnCall--;
        setTimeout(() => {
          if (this.valuesOnCall === 0) {
            this.loadingService.setLoading(false);
          }
        }, 10);
      }));
  }
}
