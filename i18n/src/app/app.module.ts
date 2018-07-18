import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// registerLocaleData( localeFr, 'fr' );
registerLocaleData( localeEn, 'en' );

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
      { provide: LOCALE_ID, useValue: 'en' }
  ]
})
export class AppModule { }
