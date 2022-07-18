import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  },
  {
    path: '**',
    redirectTo: 'inicio/lista',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
