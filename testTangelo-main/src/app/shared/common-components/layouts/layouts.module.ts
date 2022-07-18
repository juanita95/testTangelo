import { NgModule } from '@angular/core';

// components
import {SidebarComponent} from "./sidebar/sidebar.component";

// module
import { CommonModule } from '@angular/common';
import {MaterialDesignerModule} from "../../../material-designer/material-designer.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialDesignerModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class LayoutsModule { }
