import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(private toast: ToastrService) {
  }

  private _toastOptions: any = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    timeOut: "3500",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
  };

  public showSuccess(text: string, title?: string): void {
    this.toast.success(text, title, this._toastOptions);
  }

  public showWarning(text: string, title?: string): void {
    this.toast.warning(text, title, this._toastOptions);
  }

  public showInformation(text: string, title?: string): void {
    const infoOptions = {...this._toastOptions};
    infoOptions.timeOut = '5000';
    this.toast.info(text, title, infoOptions);
  }

  public showError(text: string, title?: string): void {
    const errorOptions = {...this._toastOptions};
    errorOptions.timeOut = 0;
    errorOptions.extendedTimeOut = 0;
    errorOptions.closeButton = true;
    this.toast.error(text, title, errorOptions);
  }
}
