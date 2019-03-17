import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './component/pages.component';


const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const PagesRouting = RouterModule.forChild(PagesRoutes);
