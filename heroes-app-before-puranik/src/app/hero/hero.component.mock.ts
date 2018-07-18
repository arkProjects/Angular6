import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  template: '<div></div>'
})
export class MockHeroComponent {
    @Input() hero: Hero;
    @Output() delete = new EventEmitter();
}