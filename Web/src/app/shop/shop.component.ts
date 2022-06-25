import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/cate';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { ShopParams } from '../shared/models/shopParams';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @ViewChild('search', {static : true}) searchTerm: ElementRef;

  products: Product[];
  brands: Brand[];
  types: Type[];
  shopParams = new ShopParams();
  totalCount: number;


  sortOptions = [
    { name: 'Mặc định: A - Z', value: 'name' },
    { name: 'Giá: Thấp đến cao', value: 'priceAsc' },
    { name: 'Giá: Cao đến thấp', value: 'priceDesc' }
  ];


  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getBrands();
    this.getTypes();
    this.getProducts();
    
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.totalCount = response.count ;
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      //this.totalCount = response.count;
      console.log(this.products)
      console.log(this.totalCount)

    }, error => {
      console.log(error)
    });
  }

  onSearch(){
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    this.shopParams.pageNumber = event.page;
    this.getProducts()
  }
  
  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }


  

  onReset(){
    this.searchTerm.nativeElement.value = undefined;
    this.shopParams = new ShopParams();
    this.getProducts();
  }

  

  onTypesSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onBrandsSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{ id: 0, nameBrand: 'All' }, ...response];
      console.log(this.brands)
    }, error => {
      console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types = [{ id: 0, nameCate: 'All' }, ...response];;
      //console.log(this.types)
    }, error => {
      console.log(error)
    });
  }

  





}
