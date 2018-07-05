import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsizePipe } from './ellipsize/ellipsize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EllipsizePipe],
  exports: [EllipsizePipe]
})
export class SharedModule { }
