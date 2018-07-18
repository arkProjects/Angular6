// test suite (BDD - Behavior-driven Development)
describe( 'Karma and Jasmine setup', () => {
    // a test suite has many specs (test cases)
    // let counter = 0;
    let counter;

    // called once before the first test case executes
    beforeAll(() => {

    });

    // called once after the last test case executes
    afterAll(() => {

    });

    // beforeEach function runs before each test case is run
    beforeEach(() => {
        counter = 0; // setup is typically performed in beforeEach()
    });
    
    // afterEach function runs after each test case is run
    afterEach(() => {
        counter = 0; // teardown is typically performed in afterEach()
    });

    it( 'test case 1', () => {
        counter++;
        expect( counter ).toBe( 1 );
    });
    
    it( 'test case 2', () => { // fails since counter that is setup has been modified in earlier test case
        counter++;
        expect( counter ).toBe( 1 );
    });
    
    xit( 'test case 3', () => { // fails since counter that is setup has been modified in earlier test cases
        counter++;
        expect( counter ).toBe( 1 );
    });

    // a test case can have many expect()s - if all pass then test cases passes
    it( 'should startup and run this test', () => {
        // arrange
        // create classes, setup modules, configure mock functions etc.
        let obj : any = {};

        // act
        // do some actions - actions whose behavior we are testing
        obj.x = 101;

        // assert
        // you check the result of your action is as expected
        // assertions (1 or more assertions)
        // toBe() is called a "matcher"
        expect( obj.x === 101 ).toBe( true );
        expect( obj.x ).toBe( 101 );
        // expect( obj ).toBe({ // fails since object references are compared, not their structure
        //     x: 101
        // });
        expect( obj ).toEqual({ // passes since object structures are compared (deep comparison - tests object properties, and propertis of any object within it, and so on...)
            x: 101
        });
        expect( obj ).not.toEqual({ // passes since object structures are compared (deep comparison - tests object properties, and propertis of any object within it, and so on...) - they don't match - so "not" is satisfied
            x: 102
        });
    });

    // describes can be nested
    xdescribe( 'Nested suite', () => {
        it( 'can have test cases like this', () => {
            
        });
    });
});