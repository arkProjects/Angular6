import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsizePipe } from './ellipsize/ellipsize.pipe';
import { RatingComponent } from './rating/rating.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EllipsizePipe, RatingComponent, HighlightDirective],
  exports: [EllipsizePipe, RatingComponent, HighlightDirective]
})
export class SharedModule { }
