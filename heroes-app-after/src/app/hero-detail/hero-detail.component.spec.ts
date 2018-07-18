import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { of } from 'rxjs/observable/of';
import { By } from '../../../node_modules/@angular/platform-browser';

describe( 'HeroDetail', () => {
    let antman = { id: 20, name: 'Antman', strength: 20 };
    
    let mockHeroService, mockLocation, mockActivatedRoute;

    mockHeroService = jasmine.createSpyObj( [ 'getHero', 'updateHero' ] )
    mockLocation = jasmine.createSpyObj( [ 'back' ] );
    mockActivatedRoute = {
        snapshot: {
            paramMap: {
                get: () => '20' 
            }
        }
    };

    let fixture : ComponentFixture<HeroDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroDetailComponent
            ],
            imports: [
                FormsModule
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService },
                { provide: Location, useValue: mockLocation },
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        });

        fixture = TestBed.createComponent( HeroDetailComponent );

        mockHeroService.getHero.and.returnValue( of( antman ) );
    });

    it( 'should render hero in an h2 tag', () => {
        // arrange and act
        fixture.detectChanges();

        // assert
        let h2value = fixture.debugElement.query( By.css( 'h2' ) ).nativeElement.textContent;

        expect( h2value ).toContain( 'ANTMAN' );
    });
});