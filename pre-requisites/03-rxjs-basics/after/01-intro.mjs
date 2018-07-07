/// <reference path="../node_modules/rxjs/Rx.d.ts" />

import Rx from '../node_modules/rxjs/Rx';
import '../node_modules/rxjs/add/operator/delay';
import '../node_modules/rxjs/add/operator/filter';

// Reference: http://rxmarbles.com/#interval
// create an event every second with payload being the number of the event (starting from 0)
let observable = Rx.Observable.interval(1000);

// An observer is an object with 3 methods

class MyObserver {
    next( item ) {
        console.log( item );
    }

    error( err ) {
        console.log( err );
    }

    complete() {
        console.log( 'end of event stream' );
    }
}

let observer = new MyObserver(); // create an Observer object in order to subscribe to observable
let subscription = observable.filter( x => x % 2 === 0 ).subscribe( observer ); // you get a subscription object in return

// use the subscription object to unsubscribe the observer after 10 seonds
setTimeout(function() {
    subscription.unsubscribe();
}, 20000);

// Exercise: Use Observable.from() to create an observable whose payload is set from an array of strings - since the array is one finite length, you will see complete() being triggered at the end of the event stream.
let array = ['it', 'is', 'a', 'beautiful', 'day' ];
let obs = Rx.Observable.from( array );
// obs.delay( 5000 ).subscribe( observer );

// obs.map( x => 'length is ' + x.length ).subscribe( observer );
// obs.filter( x => x.length >= 2 ).subscribe( observer );

// try a few operators