import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent],
  exports: [
      ProductListComponent,
      ProductDetailComponent
  ]
})
export class ProductsModule { }
