export let sum = ( x = 0, y = 0 ) => x + y;

export let Math = {
    called: 0,
    PI: 3.14,
    E: 2.72,
    getConstant( str : string ) {
        this.called++;
        return this[str];
    },
    changeConstant( str : string, newValue : number ) {
        this[str] = newValue;
    },
    logConstant( str : string ) {
        console.log( this.getConstant( str ) );
    }
}