import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe( 'HeroComponent' , () => {
    let fixture : ComponentFixture<HeroComponent>;
    let component, element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroComponent, /*HeroDetailComponent*/ ],
            // schemas: [NO_ERRORS_SCHEMA],
            imports: [
                RouterTestingModule
                // RouterTestingModule.withRoutes([
                //     { path: 'detail/:id', component: HeroDetailComponent },
                // ])
            ]
        });

        fixture = TestBed.createComponent( HeroComponent );
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it( 'should have hero name set to whatever name was set', () => {
        component.hero = {
            id: 11,
            name: 'Antman',
            strength: 120
        };

        expect( component.hero.name ).toBe( 'Antman' );
    });

    it( 'should render hero name in an ancor tag', () => {
        component.hero = {
            id: 11,
            name: 'Antman',
            strength: 120
        };

        fixture.detectChanges();

        // expect( element.querySelector( 'a' ).textContent ).toContain( 'Antman' );

        let deA = fixture.debugElement.query( By.css( 'a' ) );
        expect( deA.nativeElement.textContent ).toContain( 'Antman' );
    });
});