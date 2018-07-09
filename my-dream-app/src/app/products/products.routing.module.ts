import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
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
  exports: [ CommonModule, RouterModule ]
})
export class ProductsRoutingModule { }
