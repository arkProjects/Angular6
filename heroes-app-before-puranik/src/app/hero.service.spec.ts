import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';

describe( 'HeroService', () => {
    let mockMessageService, mockHttp, heroService;
    let HEROES;

    // we won't create mock Http as Angular has a mock for it that has lots of features

    beforeEach(() => {
        let mockMessageService = jasmine.createSpyObj( [ 'add', 'clear' ] );

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

    it( 'should call api/heroes/13 when passed id 13', () => {
        // does mock Ajax call (since we use the mockHttp)
        heroService.getHero( 13 ).subscribe();

        let request = mockHttp.expectOne( 'api/heroes/13' );
        request.flush( HEROES[2] );

        // since we configured response for 'api/heroes/13' there is no outstanding request - so verify() will pass
        mockHttp.verify();
    });
});