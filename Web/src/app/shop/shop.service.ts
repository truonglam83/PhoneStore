import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Pagination } from '../shared/models/pagination';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/cate';
import { map } from 'rxjs/operators'
import { ShopParams } from '../shared/models/shopParams';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl ='https://localhost:5001/api/'

  constructor(
    private http : HttpClient,
  ) { }
  

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();
    
    if(shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if(shopParams.typeId !== 0){
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.search){
      params = params.append('search',shopParams.search);
    }

    
      params = params.append('sort', shopParams.sort);
      params = params.append('pageIndex', shopParams.pageNumber.toString());
      params = params.append('pageIndex', shopParams.pageSize.toString());
      


    return this.http.get<Pagination>(this.baseUrl + 'Product', {observe: 'response', params})
      .pipe(
        map(response =>{
          return response.body;
        })
      );
  }

  getProductById(id : string){
    return this.http.get<Product>(this.baseUrl + 'product/'+ id);
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl + 'product/brands')
  }

  getTypes(){
    return this.http.get<Type[]>(this.baseUrl + 'product/categories')
  }

  
}
