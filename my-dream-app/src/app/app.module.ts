import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';

@NgModule({
    declarations: [
        // components will go in here
        AppComponent
    ],
    imports: [
        // declare dependencies (Angular/Application modules/Third-party modules)
        BrowserModule,
        ProductsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }