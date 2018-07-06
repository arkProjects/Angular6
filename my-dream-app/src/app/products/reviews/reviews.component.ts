import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from '../Product';
import productsArray from '../products';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    productId: number;
    product: IProduct;

    constructor( private _activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        this._activatedRoute.parent.paramMap.subscribe(
            params => {
                this.productId = +params.get( 'id' );
                console.log( this.productId );
                this.product = productsArray[this.productId - 1];
            }
        );
    }
}
