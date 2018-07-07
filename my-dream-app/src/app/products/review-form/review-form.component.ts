import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IProduct from '../Product';
import productsArray from '../products';
import Review from '../Review';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
    productId: number;
    product: IProduct;
    review : Review = new Review( -1, '', '', -1, -1, '', '' );

    reviewerErrors = {
        required: "Your name is required",
        minlength: 'Please type at least 3 characters'
    }

    constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private _productsService: ProductsService ) { }

    ngOnInit() {
        this._activatedRoute.parent.paramMap.subscribe(
            params => {
                this.productId = +params.get( 'id' );
                this.product = productsArray[this.productId - 1];
            }
        );
    }

    submitReview( review ) {
        this._productsService.postReview( this.productId, review ).subscribe(
            updatedReview => this._router.navigate( [ '/products', this.productId ] )
        );
    }

    getErrorMessage( reviewerEl ) {
        console.log( 'here' );
        return this.reviewerErrors[ Object.keys( reviewerEl.errors )[0] ];
    }
}
