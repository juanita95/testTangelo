import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenuTrigger} from "@angular/material/menu";
import {Router, RouterOutlet} from "@angular/router";
import {ViewportService} from "../../../services/viewport.service";
import {JdBaseComponent} from "../../../controllers/jd-base.component";
import {JdBaseService} from "../../../services/jd-base.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends JdBaseComponent implements OnInit {

  @ViewChild('outlet') routerOutlet: RouterOutlet | any;
  @ViewChild('menuTrigger') public menu: MatMenuTrigger | undefined;
  @ViewChild('header') header: MatToolbar | undefined;
  @ViewChild('headerSize') headerSize: ElementRef | undefined;
  public sizeWidthScreen: number = 0;
  public panelOpenState = false;

  constructor(
    public router: Router,
    protected jdBaseService: JdBaseService,
    private viewportService: ViewportService,
  ) {
    super(jdBaseService);
  }

  ngOnInit(): void {
    this.getViewportView();
  }

  /**
   * close menu if it is opened for < 1024px
   */
  onResize(): void {
    if (this.sizeWidthScreen < this.viewportService.BREAK_POINT_DESKTOP_USUAL && this.menu) {
      this.menu.closeMenu();
    }
  }

  /**
   * get viewport size width
   */
  getViewportView(): void {
    this.subSink.add(
      this.viewportService.sizeViewportWidth.subscribe((currentWidth) => {
        this.sizeWidthScreen = currentWidth;
      })
    )
  }
}
