import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: BasketComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BasketRoutingModule { }
