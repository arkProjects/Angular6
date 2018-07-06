import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsizePipe } from './ellipsize/ellipsize.pipe';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EllipsizePipe, RatingComponent],
  exports: [EllipsizePipe, RatingComponent]
})
export class SharedModule { }
