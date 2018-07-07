import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { ProfileAndSettingsComponent } from './profile-and-settings/profile-and-settings.component';

@NgModule({
  declarations: [
    AboutComponent,
    PageNotFoundComponent,
    RootComponent,
    LoginComponent,
    ProfileAndSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'profile-and-settings', component: ProfileAndSettingsComponent },
      { path: 'feedback', loadChildren: 'src/app/feedback/feedback.module'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
