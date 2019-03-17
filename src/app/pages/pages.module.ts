import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './component/pages.component';
import {PagesRouting} from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRouting
  ]
})
export class PagesModule { }
