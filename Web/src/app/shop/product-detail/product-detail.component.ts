import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { Brand } from 'src/app/shared/models/brand';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  quantity = 1;

  constructor(
    private shopService : ShopService,
    private activateRoute : ActivatedRoute,
    private basketService : BasketService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  
  }
  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    } 
    
  }


  loadProduct(){
    this.shopService.getProductById(this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    },error=>{
      console.log(error)
    })
  }
}
