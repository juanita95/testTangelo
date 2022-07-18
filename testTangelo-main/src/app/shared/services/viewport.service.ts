import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  public BREAK_POINT_DESKTOP_USUAL = 1024;
  public sizeViewportWidth: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }
}








