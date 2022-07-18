import { NgModule } from '@angular/core';

// modules

import { CommonModule } from '@angular/common';
import {UtilsModule} from "./utils/utils.module";
import {LayoutsModule} from "./layouts/layouts.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UtilsModule,
    LayoutsModule
  ],
  exports: [
    UtilsModule,
    LayoutsModule
  ]
})
export class CommonComponentsModule { }
