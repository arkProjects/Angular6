import { EllipsizePipe } from './ellipsize.pipe';

describe('EllipsizePipe', () => {
    let pipe, input;

    beforeEach(() => {
        pipe = new EllipsizePipe();
        input = 'Hello World, It is a beautiful day.';
    });

    it('create an instance', () => {
        const pipe = new EllipsizePipe();
        expect(pipe).toBeTruthy();
    });

    it( 'should return ellipsized output if length of input is greater than cutoff', () => {
        let value = pipe.transform( input, 10 );
        
        expect( value ).toBe( 'Hello Worl...' );
    });
    
    it( 'should return unchanged output if length of input is less than cutoff', () => {
        let cutoff = input.length;
        let value = pipe.transform( input, cutoff );
        
        expect( value ).toBe( input );
    });
});