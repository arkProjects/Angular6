import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule } from '@angular/router';
import routes from './feedback.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: [FeedbackComponent]
})
export default class FeedbackModule { }