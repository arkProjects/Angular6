import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { AboutComponent } from './about/about.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        // components will go in here
        AppComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    imports: [
        // declare dependencies (Angular/Application modules/Third-party modules)
        BrowserModule,
        ProductsModule,
        RouterModule.forRoot(
            [
                {
                    path: 'about',
                    component: AboutComponent
                },
                {
                    /* leading slash should not be given in the path */
                    path: '',
                    redirectTo: '/about', /* in redirectTo the leading slash is required */
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    component: PageNotFoundComponent
                }
            ]
        )
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }