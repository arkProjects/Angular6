import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Hero } from '../hero';
/**
 * Intergration test of Angular - testing of .ts and .html component file interactions
 * Fixture is the entire component setup (HTML + component instance)  on which tests are performed
 */
describe( 'HeroComponent', () => {
    let heroComponent : HeroComponent, fixture : ComponentFixture<HeroComponent> 

    beforeEach(() => {
        // Testing Module is configured same way as a normal module
        TestBed.configureTestingModule({
            declarations: [
                HeroComponent
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });

        // Note that unlike isolated tests, we don't create the component directly (using new operator). Instead we do like below.
        fixture = TestBed.createComponent( HeroComponent );
        heroComponent = fixture.componentInstance;
    });

    it( 'should display the hero details when hero input is set', () => {
        // arrange
        let hero : Hero = { id: 20, name: 'Antman', strength: 100 };

        // act (set the input to heroComponent - this comes from parent HeroesComponent in the app, but we are doing "shallow integrated test" here)
        heroComponent.hero = hero;
        // we have to run change detection cycle manually to reflect the change in html bindings
        fixture.detectChanges();

        // assert (test if the hero details are being shown in html)
        // There are 2 options to work with the DOM:
        // fixture.nativeElement: Are native HTML DOM nodes
        // fixture.debugElement: These are wrappers over native DOM nodes - have more power
        
        // Approach #1 - using DOM node API (nativeElement approach)
        let result = fixture.nativeElement.querySelector( 'a' ).textContent;
        expect( result ).toContain( 'Antman' );
    });
});