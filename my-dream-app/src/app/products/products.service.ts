import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import IProduct from './products';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor( private _httpClient: HttpClient ) { }

    getProducts() : Observable<any> {
        return this._httpClient.get( environment.apiBaseUrl + 'products' ); // an observable with only one event (single HttpResponse)
    }
}