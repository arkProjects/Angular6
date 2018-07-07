import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight')
    appHighlightColor : string;

    constructor( private el : ElementRef ) { }

    @HostListener( 'mouseenter' )
    onMouseEnter() {
        this.highlight( this.appHighlightColor || 'red' );
    }
    
    @HostListener( 'mouseleave' )
    onMouseLeave() {
        this.highlight( null );
    }

    highlight( color ) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
