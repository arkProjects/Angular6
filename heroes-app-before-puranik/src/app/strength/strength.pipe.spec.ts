import { StrengthPipe } from './strength.pipe';

describe( 'StrengthPipe (transform method)', () => {
    let strengthPipe;

    beforeEach(() => {
        // common arrange for all test cases
        strengthPipe = new StrengthPipe();

        // common actions can also come inside beforeEach(), but in this case there is no common thing to do in each test case
    });

    it( 'should return 5 (weak) when passed a strength value of 5', () => {
        // act
        let result = strengthPipe.transform( 5 );

        // assert
        expect( result ).toBe( '5 (weak)' );
    });

    // make sure to test out boundary values (example when moving from 9 -> 10 it transform() value returned changes as per requirement)
    it( 'should return string with substring `(weak)` when passed a strength value of 9', () => {
        let result = strengthPipe.transform( 9 );

        expect( result ).toContain( '(weak)' );
    });
    
    it( 'should return 10 (strong) when passed a strength value of 10', () => {
        let result = strengthPipe.transform( 10 );

        expect( result ).toBe( '10 (strong)' ); // toBe() compares using === (excat match)
    });
    
    it( 'should return string with substring `(strong)` when passed a strength value of 19', () => {
        let result = strengthPipe.transform( 19 );

        expect( result ).toMatch( /strong/ ); // toMatch() tests using regular expression
    });
    
    it( 'should return 20 (unbelievable) when passed a strength value of 20', () => {
        let result = strengthPipe.transform( 20 );

        expect( result ).toBe( '20 (unbelievable)' );
    });
});