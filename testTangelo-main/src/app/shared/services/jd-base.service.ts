import { Injectable } from '@angular/core';
import {AlertsService} from "./alerts.service";

@Injectable({
  providedIn: 'root'
})
export class JdBaseService {

  constructor(
    public alertService: AlertsService
  ) { }

}
