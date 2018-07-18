import { sum, Math } from './math'; // this module's methods, classes etc. are tested in this file

// mark comments for the 3 portions of the test
// arrange - declare 2 variables to be added
// act
// assert
describe( 'Math module', () => {
    // as the math module can have many functions exported, we can group tests for sum function in a nested describe()
    describe( 'sum function', () => {
        it( 'should return 3 when 1 and 2 are passed', () => {
            // arrange - nothing much to do really
            let x = 1, y = 2;
            
            // act
            let result = sum( x, y );

            // assert
            expect( result ).toBe( x + y );
        });

        // write test to check sum() returns 0 if no argument is passed
        it( 'should return 0 when no arguments are passed', () => {
            // arrange - nothing to do
            
            // act
            let result = sum();

            // assert
            expect( result ).toBe( 0 );
        });

        // write test to check sum() returns the passed number if 1 argument is passed
        it( 'should return the passed number when 1 argument is passed', () => {
            // arrange - nothing much to do really
            let x = 1;
            
            // act
            let result = sum( x );

            // assert
            expect( result ).toBe( x );
        });

        // suppose we expect getConstant() to be called when logConstant() is called
        it( 'should call getConstant() when logConstant() is called', () => {
            // calls to original logCOnstant() - this will call the real getCOnstant() internally and increase Math.called value
            Math.logConstant( 'PI' );
            Math.logConstant( 'PI' );

            // arrange - create a spy in place of getConstant()
            spyOn( Math, 'getConstant' );

            // act
            Math.logConstant( 'PI' ); // spy version of getCOnstant() gets called - actual getConstant() does not get called
            Math.logConstant( 'E' );
            Math.logConstant( 'c' );

            // assert
            // a spy keeps track of when its called, what arguments it is called with, return values etc.
            // if we don't have a spy then we cannot use methods like toHaveBeenCalled etc. with the expect()
            expect( Math.getConstant ).toHaveBeenCalled();
            expect( Math.getConstant ).toHaveBeenCalledTimes( 3 );
            expect( Math.getConstant ).toHaveBeenCalledWith( 'PI'/*, 1, 2 */ );

            // uncomment this to check the internal definition of the spy
            // console.log( Math.getConstant.toString() );

            expect( Math.called ).toBe( 2 );
        });
    });
});