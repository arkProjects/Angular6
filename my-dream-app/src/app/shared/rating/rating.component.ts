import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
    @Input()
    rating : number;

    @Output()
    ratingClick: EventEmitter<number> = new EventEmitter<number>();
    
    // keep constructor very basic
    constructor() {
        console.log( 'constructor' );
    }

    // whenever an input attribute is set
    // whenever the input attribute changes it gets called
    ngOnChanges( change ) {
        console.log( 'ngOnChanges' );
        console.log( this.rating );
        console.log( 'change object is ', change );
    }

    // initiate backend calls here
    ngOnInit() {
        console.log( 'ngOnInit' );
    }

    round( value ) {
        return Math.round( value )
    }

    starClick( value ) {
        console.log( value );
        this.ratingClick.emit( value );
    }
}
