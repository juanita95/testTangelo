import {NgModule} from '@angular/core';

// modules

import {CommonModule} from '@angular/common';
import {CommonComponentsModule} from "./common-components/common-components.module";
import {ControllersModule} from "./controllers/controllers.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControllersModule,
    CommonComponentsModule,
  ],
  exports: [
    CommonComponentsModule,
    ControllersModule,
  ]
})
export class SharedModule {
}
