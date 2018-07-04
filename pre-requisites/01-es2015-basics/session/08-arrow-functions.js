let obj = {
    a: 1,
    getA: function() {
        let self = this;
        console.log( this.a );

        let foo = () => {
            console.log( self.a );
            console.log( this.a );
            console.log( this ); // "window" in browser ("global" in node) - if not arrow; and same as getA()'s this when using arrow function
        };

        foo();
    }
}

obj.getA();