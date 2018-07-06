import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import IProduct from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor( private _httpClient: HttpClient ) { }

  getProducts()  {
      return this._httpClient.get( environment.apiBaseUrl + 'products' );
  }
}