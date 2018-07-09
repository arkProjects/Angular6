import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ReviewsComponent, ReviewFormComponent],
  exports: [
      ProductListComponent,
      ProductDetailComponent
  ],
  providers: [
      ProductsService
  ]
})
export class ProductsModule { }
