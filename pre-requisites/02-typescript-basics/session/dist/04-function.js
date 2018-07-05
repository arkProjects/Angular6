(function () {
    var sum = function (x, y) { return x + y; }; // line 3
    sum(1, 2);
    sum(1, 'hello'); // error
    var str = sum(1, 2); // error
    var printSum = function (x, y) { return console.log(x + y); };
    var printSum2 = function (x, y) { return console.log(x + y); }; // you can also explicitly specify void return
    var z = printSum(1, 2);
    var sum2 = function (x, y) { return x + y; }; // exactly same as line 3 (alternative syntax)
    // Exercise:
    var nums = [
        1, 2, 3
    ];
    var squaredNums = nums.map(function (item, index, array) {
        console.log(item, index, array);
        return item * item;
    });
    var map = function (iterator) {
        return [1, 2];
    };
    console.log(squaredNums);
    map(function (, , _a, , ) { });
    {
        return 3;
    }
    ;
    var hotels = [
        {
            name: 'Udupi Grand',
            location: 'Ashok Nagar'
        },
        {
            name: 'Nagarjuna',
            location: 'Ashok Nagar'
        }
    ];
    var hotelNames = hotels.map(function (item) {
        return item.name;
    });
    console.log(hotelNames);
}());
