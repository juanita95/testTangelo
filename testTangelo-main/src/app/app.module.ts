import {LOCALE_ID, NgModule} from '@angular/core';
// components
import { AppComponent } from './app.component';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {NgxLoadingModule} from "ngx-loading";
import {MaterialDesignerModule} from "./material-designer/material-designer.module";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {ListRequestLoanModule} from "./feature/list-request-loan/list-request-loan.module";
import {SharedModule} from "./shared/shared.module";
import {FeatureModule} from "./feature/feature.module";
import {RouterModule} from "@angular/router";
import {LayoutsModule} from "./shared/common-components/layouts/layouts.module";

// services
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CustomHttpInterceptor} from "./shared/services/custom-http.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDesignerModule,
    AppRoutingModule,
    RouterModule,
    LayoutsModule,
    HttpClientModule,
    FeatureModule,
    SharedModule,
    NgxLoadingModule,
    ListRequestLoanModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
