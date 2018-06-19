import { Routes, RouterModule, RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { MasterPageComponent } from './master-page.component';
import { NgModule } from '@angular/core';
import { RegionsPageComponent } from './regions/regions-page.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: RegionsPageComponent
      }
    ],
    canActivate: [

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
