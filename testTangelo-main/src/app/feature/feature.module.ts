import { NgModule } from '@angular/core';

// modules

import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MaterialDesignerModule} from "../material-designer/material-designer.module";
import {SharedModule} from "../shared/shared.module";

// components

import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    FeatureRoutingModule,
    MaterialDesignerModule,
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
})
export class FeatureModule { }
