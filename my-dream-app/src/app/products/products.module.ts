import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(
        [
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'products/:id',
                component: ProductDetailComponent,
                children: [
                    {
                        path: '',
                        component: ReviewsComponent
                    },
                    {
                        path: 'add',
                        component: ReviewFormComponent
                    }
                ]
            }
        ]
    )
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ReviewsComponent, ReviewFormComponent],
  exports: [
      ProductListComponent,
      ProductDetailComponent
  ]
})
export class ProductsModule { }
