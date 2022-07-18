import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureComponent} from "./feature.component";

const routes: Routes = [

  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'lista',
        loadChildren: () => import('./list-request-loan/list-request-loan.module').then(m => m.ListRequestLoanModule),
      },
      {
        path: 'usuario',
        loadChildren: () => import('./user-request-loan/user-request-loan.module').then(m => m.UserRequestLoanModule),
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
