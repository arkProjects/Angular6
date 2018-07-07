import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginModel = {
        email: '',
        password: ''
    };

    constructor( private _authService: AuthService, private _router : Router ) { }

    ngOnInit() {
    }

    login() {
        this._authService.login( this.loginModel ).subscribe(
            data => {
                if( data.authToken ) {
                    localStorage.setItem( 'authToken', data.authToken );
                    localStorage.setItem( 'email', data.email );

                    // redirect user to products page
                    this._router.navigateByUrl( '/products' );
                }
            }
        )
    }
}
