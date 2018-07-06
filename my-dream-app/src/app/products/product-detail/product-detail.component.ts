import { Component, OnInit } from '@angular/core';
import productsArray from '../products';
import IProduct from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product : IProduct;

    constructor() { }

    ngOnInit() {
        this.product = productsArray[0];
    }
}
