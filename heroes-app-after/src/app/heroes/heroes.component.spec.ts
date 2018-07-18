import { HeroesComponent } from "./heroes.component";
import { Hero } from '../hero';

import { of } from 'rxjs/observable/of';

describe( 'HeroesCOmponent', () => {
    let component : HeroesComponent;
    let HEROES : Hero[];
    let mockHeroService;

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj([
            'getHeroes', 'addHero', 'deleteHero'
        ]);

        HEROES = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }      
        ];

        component = new HeroesComponent( mockHeroService );
        component.heroes = HEROES;
    });

    it( 'should succesfully be created', () => {
        expect( component ).toBeDefined();
    });
    
    it( 'should get all heroes from the backend when getHeroes() method is called', () => {
        // tbd
    });

    it( 'should delete indicated hero when delete( hero ) is passed', () => {
        // arrange
        mockHeroService.deleteHero.and.returnValue(of(true)); // so that subscribe() call does not fail
        
        // act
        component.delete( HEROES[1] );

        // assert
        expect( component.heroes ).toContain( HEROES[0] );
        expect( component.heroes ).toContain( HEROES[2] );
    });

    it( 'should call deleteHero() with the hero to be deleted', () => {
        // arrange
        mockHeroService.deleteHero.and.returnValue(of(true)); // so that subscribe() call does not fail

        // act
        component.delete( HEROES[1] );

        // assert
        expect( mockHeroService.deleteHero ).toHaveBeenCalledWith( HEROES[1] );
    });
    
    it( 'should call subscribe() on te observable returned by deleteHero()', () => {
        // arrange
        let returnedObservable = of(true);
        spyOn( returnedObservable, 'subscribe' );
        mockHeroService.deleteHero.and.returnValue( returnedObservable ); // so that subscribe() call does not fail

        // act
        component.delete( HEROES[1] );

        // assert
        expect( returnedObservable.subscribe ).toHaveBeenCalledWith();
    });
});