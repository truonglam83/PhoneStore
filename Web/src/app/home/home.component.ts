import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  shopParams = new ShopParams();
  listimg = [
    {image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/5d/5f/b1/9a52ab9df49135cca1d43c1bcc9883c4.png.webp',text: 'Second'},
    {image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/39/a2/b9/71e09a3bcb31c7eccb6b3b72b973b4a5.jpg.webp', text: 'First'},
    
    {image: 'https://salt.tikicdn.com/cache/w1080/ts/banner/2d/58/8e/a84a1b1be41988ed30204c926793163c.jpg.webp',text: 'Third'}
 ];

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.products = response.data;
      console.log(this.products)

    }, error => {
      console.log(error)
    });
  }
}
