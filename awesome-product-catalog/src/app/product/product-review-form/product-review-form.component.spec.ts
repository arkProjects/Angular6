import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductReviewFormComponent } from './product-review-form.component';

describe('ReviewFormComponent', () => {
    let component: ProductReviewFormComponent;
    let fixture: ComponentFixture<ProductReviewFormComponent>;
    let mockProductService;

    let reviews, reviewForm;

    beforeEach(async(() => {
        reviews = reviews = [
            {
                "id": 1,
                "createdDate": "Aug 31, 2016",
                "reviewer": "John Doe",
                "productId": 1,
                "starRating": 4,
                "title": "Just go for it",
                "text": "Velit anim dolor consectetur qui esse Lorem aliqua id non. Deserunt elit cupidatat nisi id mollit ut fugiat labore eiusmod enim exercitation. Dolor est commodo aliquip enim ad anim dolore minim est veniam velit cupidatat commodo cupidatat. Ea laborum velit laboris dolor dolore eu dolor. Irure consectetur nulla nulla incididunt fugiat."
            },
            {
                "id": 3,
                "createdDate": "Oct 5, 2016",
                "reviewer": "Barry Barton",
                "productId": 1,
                "starRating": 5,
                "title": "Awesome product - sheer pleasure using it",
                "text": "Ea consequat ex velit aute cupidatat aute nulla officia mollit ut ut do. Officia esse mollit enim ad anim qui cillum eu in dolore Lorem sunt do. Deserunt eiusmod sint nisi proident. Ullamco adipisicing labore tempor ea et occaecat nostrud exercitation consectetur excepteur ipsum laboris. Duis culpa deserunt proident dolore nisi veniam fugiat irure sint. Eu quis labore consequat id ut fugiat elit aliquip ea. Amet ea amet ea sit."
            }
        ];
        reviewForm = {
            invalid: false,
            value: {
                "reviewer": "John Doe",
                "starRating": "3",
                "title": "Not good, not bad",
                "text": "Cut the grass fine, but left shreds on the lawn"
            }
        };

        mockProductService = jasmine.createSpyObj( [ 'postReviews' ] );
        TestBed.configureTestingModule({
            declarations: [ ProductReviewFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductReviewFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should be created', () => {
        expect(component).toBeTruthy();
    });
    
    it( 'submitReview should call postReview', () => {
        component.postReview( reviewForm.value );
        expect(mockProductService.postReview).toHaveBeenCalled();
    });
});