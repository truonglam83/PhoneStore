import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ShopRoutingModule,
  ],
  exports:[
    ProductItemComponent,
    ProductDetailComponent
  ]
  
})
export class ShopModule { }
