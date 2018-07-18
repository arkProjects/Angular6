import { StrengthPipe } from './strength.pipe';

describe( 'StrengthPipe', () => {
    let strengthPipe;
    
    beforeEach(() => {
        strengthPipe = new StrengthPipe();
    });

    it( 'should display weak if the value is 5', () => {
        // act
        let value = strengthPipe.transform( 5 )

        // assert
        expect( value ).toEqual( '5 (weak)' );
    });
    
    it( 'should display strong if the value is 10', () => {
        // act
        let value = strengthPipe.transform( 10 )

        // assert
        expect( value ).toEqual( '10 (strong)' );
    });
});