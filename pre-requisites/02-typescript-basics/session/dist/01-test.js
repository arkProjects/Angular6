(function () {
    var x = 'one';
    {
        var x_1 = 1;
        console.log(x_1);
    }
    function foo() {
        var _this = this;
        var sum = function (x, y) { return x + y; };
        var foo = function () { return console.log(_this); };
    }
    console.log(x);
}());
