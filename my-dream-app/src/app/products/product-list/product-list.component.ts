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

    constructor() { }

    // called when component has been added to DOM
    ngOnInit() {
        this.products = productsArray;
    }
}