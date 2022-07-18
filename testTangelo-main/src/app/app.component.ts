import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./shared/services/loading.service";
import {ViewportService} from "./shared/services/viewport.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testTangelo';

  constructor(
    public loadingService: LoadingService,
    private viewportService: ViewportService
  ) {
  }

  ngOnInit(): void {
    this.calculateViewport();
  }

  calculateViewport(): void {
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    this.viewportService.sizeViewportWidth.next(vw);
  }
}
