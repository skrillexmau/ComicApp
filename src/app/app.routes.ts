import {RouterModule, Routes} from '@angular/router';

const AppRoutes: Routes = [
  { path: 'app', loadChildren: './pages/pages.module#PagesModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'app/home' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
