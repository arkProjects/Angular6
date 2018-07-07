import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from '../Product';
import productsArray from '../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    productId: number;
    product: IProduct;
    reviews: any[];

    constructor( private _activatedRoute: ActivatedRoute, private _productsService: ProductsService ) { }

    ngOnInit() {
        this._activatedRoute.parent.paramMap.subscribe(
            params => {
                this.productId = +params.get( 'id' );
                console.log( this.productId );
                this._productsService.getReviews(this.productId).subscribe(
                    response => {
                      this.reviews = response;
                    }
                  );
            }
        );
    }
}
