import { ProductListComponent } from './product-list.component';
import { of } from 'rxjs';

describe( 'ProductListComponent', () => {
    let productListComponent : ProductListComponent;
    let mockProductService;

    let products = [
        {
            "id": 1,
            "name": "Leaf Rake",
            "code": "GDN-0011",
            "releaseDate": "Mar 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "id": 2,
            "name": "Garden Cart",
            "code": "GDN-0023",
            "releaseDate": "Mar 21, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "id": 3,
            "name": "Hammer",
            "code": "TBX-0048",
            "releaseDate": "May 27, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];

    beforeEach(() => {
        mockProductService = jasmine.createSpyObj( [ 'getProducts' ] );
        mockProductService.getProducts.and.returnValue(of(products));
        productListComponent = new ProductListComponent( mockProductService );
    });

    it( 'fetchProducts() should store the retrieved set of products', () => {
        productListComponent.fetchProducts();

        expect(productListComponent.products.length).toBe(3);
    });
});