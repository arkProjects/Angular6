// Two terms when it comes to unit testing in Angular
// Isolated test (you test the class but NOT the template html file)
// Integration test (testing the component .ts file's interaction with the component's template html file)

// we are doing isolated tests here (later we will see integration testing)
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/observable/of';

describe( 'HeroesComponent', () => {
    let component : HeroesComponent;
    let mockHeroService; // in TypeScript even a class can be used as a type
    let HEROES;

    beforeEach(() => {
        // common arrange
        HEROES =  [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }
        ];
  
        // jasmine.createSpy() creates an object entirely composed of spies
        // we need not create spies for all method sin HeroService - we need spies only for those used inside HeroesComponent (specifically the ones that could get called because of our test cases)
        mockHeroService = jasmine.createSpyObj([
            'getHeroes', 'addHero', 'deleteHero'
        ]);
        // mockHeroService = {
        //     deleteHero() {
        //         return {
        //             subscribe: function() {

        //             }
        //         }    
        //     }
        // };

        component = new HeroesComponent( mockHeroService );
        component.heroes = HEROES;
    });

    it( 'should delete the passed hero when delete() is called', () => {
        // arrange
        // you can customize the return value of a spy using .and.returnValue()
        // of( value ) creates an observable which fires an event with passed value as payload
        let returned$ = of( null );
        spyOn( returned$, 'subscribe' ); // we are interested to find out if subscribe() is getting called
        mockHeroService.deleteHero.and.returnValue( returned$ );

        const heroToDelete = HEROES[1];
        
        // act
        component.delete( heroToDelete );

        // assert
        expect( component.heroes.length ).toBe( 2 );
        expect( component.heroes ).not.toContain( HEROES[1] );
        expect( mockHeroService.deleteHero ).toHaveBeenCalledWith( HEROES[1] );

        // also try to figure out if subscribe() is getting called inside of delete
        expect( returned$.subscribe ).toHaveBeenCalled();
    });
});