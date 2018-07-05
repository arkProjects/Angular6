/// <reference path="./node_modules/@types/underscore/index.d.ts" />

let result = _.contains([1,2,3,4], 3).toString();
document.getElementById( 'output' ).innerHTML = result;
