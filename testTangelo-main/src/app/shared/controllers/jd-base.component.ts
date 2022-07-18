import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {JdBaseService} from "../services/jd-base.service";
import {AlertsService} from "../services/alerts.service";

@Injectable()

export abstract class JdBaseComponent implements OnDestroy {

  protected subSink: Subscription = new Subscription();

  constructor(protected componentService: JdBaseService) {}


  get alertService(): AlertsService {
    return this.componentService.alertService;
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
