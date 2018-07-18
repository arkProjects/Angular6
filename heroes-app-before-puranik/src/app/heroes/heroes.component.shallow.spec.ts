import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { MockHeroComponent } from '../hero/hero.component.mock';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/observable/of';
import { By } from '../../../node_modules/@angular/platform-browser';

describe( 'HeroesComponent', () => {
    let heroesComponent : HeroesComponent, fixture : ComponentFixture<HeroesComponent>, mockHeroService, HEROES;

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj( [ 'getHeroes', 'addHero', 'deleteHero' ] );
        
        HEROES = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 }
        ];

        // Testing Module is configured same way as a normal module
        TestBed.configureTestingModule({
            declarations: [ HeroesComponent, MockHeroComponent ],
            providers: [
                // HeroService is short for { provide: HeroService, useClass: HeroService }
                // instead of useClass (which means use this class to instantiate the HeroService)
                { provide: HeroService, useValue: mockHeroService }
            ]
        });
    });

    it( 'should display the heroes after it is created', () => {
        // arrange
        mockHeroService.getHeroes.and.returnValues( of( HEROES ) )
        fixture = TestBed.createComponent( HeroesComponent );
        heroesComponent = fixture.componentInstance;
        
        // act
        // Note that unlike isolated tests, we don't create the component directly (using new operator). Instead we do like below.
        fixture.detectChanges(); // required for lifecycle methods (including ngOnInit) to get called

        // assert changes due to template bindings
        // debugElement query can accept queries by css, directive etc.
        
        expect( fixture.componentInstance.heroes.length ).toBe(4);

        // using nativeElement due to some issue
        let liNodes = fixture.nativeElement.querySelectorAll( 'li' )
        expect( liNodes.length  ).toBe( 4 );

        for( let i = 0; i < liNodes; i++ ) {
            expect( liNodes[i].textContent ).toContain( HEROES[i].name );
        }
    });
});