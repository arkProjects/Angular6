describe( 'SomeBuildingBlock', () => {
    let obj;

    beforeEach(() => {
        obj = { }; 
    });

    it( 'should be true if true', () => {
        // arrange
        obj.x = false;

        // act
        obj.x = true;

        // assert
        expect( obj.x ).toBe( true );
    })
});