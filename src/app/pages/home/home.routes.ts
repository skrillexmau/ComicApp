import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home.component';


const HomeRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/app/home'}
];

export const HomeRouting = RouterModule.forChild(HomeRoutes);
