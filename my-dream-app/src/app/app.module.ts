import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileAndSettingsComponent } from './profile-and-settings/profile-and-settings.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { JwtInterceptor } from './jwt.interceptor';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
    declarations: [
        // components will go in here
        AppComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProfileAndSettingsComponent,
        LoginComponent
    ],
    imports: [
        // declare dependencies (Angular/Application modules/Third-party modules)
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ProductsModule,
        RouterModule.forRoot(
            [
                {
                    path: 'login',
                    component: LoginComponent
                },
                {
                    path: 'about',
                    component: AboutComponent
                },
                {
                    path: 'profile-and-settings',
                    component: ProfileAndSettingsComponent,
                    canActivate: [ AuthGuard ]
                },
                {
                    /* leading slash should not be given in the path */
                    path: '',
                    redirectTo: '/about', /* in redirectTo the leading slash is required */
                    pathMatch: 'full'
                },
                {
                    path: 'feedback',
                    loadChildren: 'src/app/feedback/feedback.module',
                    canActivate: [ AuthGuard ]
                },
                {
                    path: '**',
                    component: PageNotFoundComponent
                }
            ]
        )
    ],
    providers: [
        AuthService,
        AuthGuard
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }*/
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }