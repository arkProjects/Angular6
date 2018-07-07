import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor( private _httpClient: HttpClient, private _router: Router ) { }

    // for headers that are sent along with every request, we will implement HttpInterceptor and use it - we will set headers through that
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    
    login( loginModel ) : Observable<any> {
        return this._httpClient.post( `${environment.apiBaseUrl}/login/`, loginModel, this.httpOptions );
    }

    logout() {
        localStorage.removeItem( 'authToken' );
        localStorage.removeItem( 'email' );

        this._router.navigateByUrl( '/login' );
    }
}