// modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignerModule} from "../../material-designer/material-designer.module";

// components

import {ButtonComponent} from "./button/button.component";
import { MatCardComponent } from './mat-card/mat-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    MatCardComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignerModule
  ],
  exports: [
    ButtonComponent,
    MatCardComponent
  ]
})
export class ControllersModule {
}
