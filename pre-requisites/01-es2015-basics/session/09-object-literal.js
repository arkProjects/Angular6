let x = 1;

let obj = {
    x, // same as x: x if variable to initialize the property has same name as property then this syntax can be used
    getX() { // simplified syntax for methods
        return this.x;
    }
};

