import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

import { Subscription } from 'rxjs';

import IProduct from '../Product';
import productsArray from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: IProduct[];
    filteredProducts: IProduct[];
    isImageVisible: boolean = true;
    filterKey: string = '';
    color : string = 'lightgray';

    productsSubscription: Subscription;

    constructor( private _productsService: ProductsService ) {
    }

    // called when component has been added to DOM
    ngOnInit() {
        this.productsSubscription = this._productsService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            ( err ) => console.log( err )
        );
    }

    toggleImage() {
        this.isImageVisible = !this.isImageVisible;
    }

    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }

    filterProducts() {
        console.log( this.filterKey );
        this.filteredProducts = this.products.filter( product => product.name.toUpperCase().indexOf( this.filterKey.toUpperCase() ) !== -1 );
    }

    handleRatingClick( value ) {
        alert( value );
    }
}