import  { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from '../hero/hero.component';
// import { MockHeroComponent } from '../hero/hero.component.mock';
// import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Input, Directive } from '@angular/core';

@Directive({
    selector: '[routerLink]',
    host: { '(click)' : 'onClick()' }
})
export class RouterLinkDirectiveStub {
    @Input( 'routerLink' )
    linkParams : string;

    navigateTo: string = null;

    onClick() {
        this.navigateTo = this.linkParams;
    }
}

describe( 'HeroesComponent deep tests', () => {
    let fixture : ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES : Hero[];

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj([
            'getHeroes', 'addHero', 'deleteHero'
        ]);

        HEROES = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }      
        ];

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent,
                RouterLinkDirectiveStub
            ],
            imports: [
                // RouterTestingModule,
                FormsModule
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        });

        fixture = TestBed.createComponent( HeroesComponent );
    });

    it( 'should pass on the hero to child HeroCmponents and be set there correctly', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        fixture.detectChanges();

        let hcDEs = fixture.debugElement.queryAll( By.directive( HeroComponent ) );

        hcDEs.forEach( ( hcDE, i ) => expect( hcDE.componentInstance.hero ).toEqual( HEROES[i] ) );
    });

    it( 'should trigger delete with hero to be deleted when delete button is clicked (Method 1)', () => {
        let heroesComponent = fixture.componentInstance;
        spyOn( heroesComponent, 'delete' );
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        let heroComponents = fixture.debugElement.queryAll( By.css( 'button.delete' ) );

        heroComponents[0].triggerEventHandler( 'click', { stopPropagation : () => {} } );

        expect( heroesComponent.delete ).toHaveBeenCalledWith( HEROES[0] );
    });

    it( 'should trigger delete when delete event is fired on the child HeroComponent (Method 2)', () => {
        let heroesComponent = fixture.componentInstance;
        spyOn( heroesComponent, 'delete' );
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        let heroComponents = fixture.debugElement.queryAll( By.directive( HeroComponent ) );

        heroComponents[0].componentInstance.delete.emit( undefined );

        expect( heroesComponent.delete ).toHaveBeenCalledWith( HEROES[0] );
    });
    
    it( 'should trigger delete when delete event is fired on the child HeroComponent (Method 3)', () => {
        let heroesComponent = fixture.componentInstance;
        spyOn( heroesComponent, 'delete' );
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        let heroComponents = fixture.debugElement.queryAll( By.directive( HeroComponent ) );

        heroComponents[0].triggerEventHandler( 'delete', null );

        expect( heroesComponent.delete ).toHaveBeenCalledWith( HEROES[0] );
    });

    it( 'should add a new hero when name is input and button clicked', () => {
        // arrange
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        
        let newHero : Hero = {
            id: 14,
            name: 'Antman',
            strength: 22
        };

        mockHeroService.addHero.and.returnValue(of( newHero ));

        let heroesComponent = fixture.componentInstance;

        // act
        fixture.debugElement.query( By.css( 'input' ) ).nativeElement.value = newHero.name;
        fixture.debugElement.query( By.css( 'button' ) ).triggerEventHandler( 'click', null );
        fixture.detectChanges();

        // assert
        expect( fixture.debugElement.query( By.css( 'ul' ) ).nativeElement.textContent ).toContain( newHero.name );
    });

    it( 'should have correct route for the first hero', () => {
        // arrange
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        let heroComponents = fixture.debugElement.queryAll( By.directive( HeroComponent ) );
        let anchorTag = heroComponents[0].query( By.directive( RouterLinkDirectiveStub ) );
        let routerLink = anchorTag.injector.get( RouterLinkDirectiveStub );

        // debugging using assert
        expect( heroComponents.length ).toBe( 3 );
        expect( anchorTag.nativeElement.textContent ).toContain( '11 Mr. Nice' );
        
        // act
        anchorTag.triggerEventHandler('click', null);

        // assert        
        expect( routerLink.navigateTo ).toBe( '/detail/11' );
    });
});