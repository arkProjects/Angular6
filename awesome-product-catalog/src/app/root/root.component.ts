import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { log } from '../shared/log.decorator';
import { AuthenticationService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor( private _router: Router, private _authenticationService: AuthenticationService ) { }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnChanges'
  // })
  ngOnChanges() { }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnInit'
  // })
  ngOnInit() {
  }

  // @log({
  //   name: 'root.component.ts',
  //   method: 'ngOnDestroy'
  // })
  ngOnDestroy() { }

  logout() {
    this._authenticationService.logout();
    this._router.navigate( [ '/login' ] )
  }

  isLoggedIn() {
      return this._authenticationService.isLoggedIn();
  }
}