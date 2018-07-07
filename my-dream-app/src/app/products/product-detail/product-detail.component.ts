import { Component, OnInit } from '@angular/core';
import productsArray from '../products';
import IProduct from '../Product';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    productId: number;
    product : IProduct;

    constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private _productsService: ProductsService ) {
        console.log( _activatedRoute );
    }

    ngOnInit() {
        // all params are strings
        // this.productId = +this._activatedRoute.snapshot.params.id;
        // paramMap is an Observable (not part of ANgular - comes from Rxjs)
        // An Observable has a method called subscribe - 3 arguments (all functions)
        this._activatedRoute.paramMap.subscribe(
            params => {
                this.productId = +params.get( 'id' );
                this._productsService.getProduct( this.productId ).subscribe(
                    product => this.product = product
                );
            }
        );
    }

    navigateToProductList() {
        // this._router.navigate( [ '/products' ] );
        this._router.navigateByUrl( '/products' );
    }
}
