import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import IProduct from './products';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor( private _httpClient: HttpClient ) { }

    // for headers that are sent along with every request, we will implement HttpInterceptor and use it - we will set headers through that
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
    };

    getProducts() : Observable<any> {
        return this._httpClient.get( environment.apiBaseUrl + '/products' ); // an observable with only one event (single HttpResponse)
    }

    getProduct( id: number ) : Observable<any> {
        return this._httpClient.get( `${environment.apiBaseUrl}/products/${id}` );
    }
    
    getReviews( id : number ) : Observable<any> {
        return this._httpClient.get( `${environment.apiBaseUrl}/products/${id}/reviews` );
    }
    
    postReview( id : number, review ) : Observable<any> {
        return this._httpClient.post( `${environment.apiBaseUrl}/products/${id}/reviews`, review, this.httpOptions );
    }
    
    postProduct( id : number, product ) : Observable<any> {
        return this._httpClient.post( `${environment.apiBaseUrl}/products`, product, this.httpOptions );
    }
}