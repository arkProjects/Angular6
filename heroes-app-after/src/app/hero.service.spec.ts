import { TestBed, inject } from "@angular/core/testing";
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Hero } from './hero';

describe( 'HeroService', () => {
    let mockMessageService, mockHttp : HttpTestingController, heroService : HeroService;
    let HEROES: Hero[];

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj([
            'add'
        ]);

        HEROES = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }      
        ];

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: MessageService, useValue: mockMessageService },
                HeroService
            ]
        });

        mockHttp = TestBed.get( HttpTestingController );
        heroService = TestBed.get( HeroService );
    });

    describe( 'getHero', () => {
        // it('should call http get() with the correct URL', inject( [HeroService, HttpTestingController], ( heroService, mockHttp ) => {
            
        // }));

        it( 'should call api/heroes/13 when passed id 13', () => {
            heroService.getHero( 13 ).subscribe();
            // heroService.getHero( 12 ).subscribe();

            let request = mockHttp.expectOne( 'api/heroes/13' );
            request.flush( HEROES[2] );

            mockHttp.verify();
        });
    });
});