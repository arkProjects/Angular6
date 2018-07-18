import  { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
// import { HeroComponent } from '../hero/hero.component';
import { MockHeroComponent } from '../hero/hero.component.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { of } from 'rxjs/observable/of';

describe( 'HeroesComponent shallow tests', () => {
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
                MockHeroComponent
            ],
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        });

        fixture = TestBed.createComponent( HeroesComponent );
    });

    it( 'should get heroes from service when loaded', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        fixture.detectChanges();

        expect( fixture.componentInstance.heroes.length ).toBe(3);
    });
    
    it( 'should get heroes from service when loaded', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        fixture.detectChanges();

        expect( fixture.nativeElement.querySelectorAll( 'li' ).length ).toBe(3);
    });
});