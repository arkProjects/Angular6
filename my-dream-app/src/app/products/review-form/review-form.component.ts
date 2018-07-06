import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from '../Product';
import productsArray from '../products';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
    productId: number;
    product: IProduct;

    constructor( private _activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        this._activatedRoute.parent.paramMap.subscribe(
            params => {
                this.productId = +params.get( 'id' );
                this.product = productsArray[this.productId - 1];
            }
        );
    }
}
