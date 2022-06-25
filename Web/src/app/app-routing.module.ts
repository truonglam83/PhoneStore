import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'san-pham', loadChildren: ()=> import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: 'gio-hang', loadChildren: ()=> import('./basket/basket.module').then(mod => mod.BasketModule)},
  {path: 'thanh-toan', canActivate: [AuthGuard] , loadChildren: ()=> import('./checkout/checkout.module').then(mod => mod.CheckoutModule)},
  {path: 'tai-khoan', loadChildren: ()=> import('./account/account.module').then(mod => mod.AccountModule)},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
