import { Component, OnInit } from '@angular/core';

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

    constructor() {
        
    }

    // called when component has been added to DOM
    ngOnInit() {
        this.products = productsArray;
        this.filteredProducts = this.products;
    }

    toggleImage() {
        this.isImageVisible = !this.isImageVisible;
    }

    filterProducts() {
        console.log( this.filterKey );
        this.filteredProducts = this.products.filter( product => product.name.toUpperCase().indexOf( this.filterKey.toUpperCase() ) !== -1 );
    }

    handleRatingClick( value ) {
        alert( value );
    }
}