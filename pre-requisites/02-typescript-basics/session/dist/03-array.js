(function () {
    var days = [
        'Sunday',
        'Monday',
        'Tuesday'
    ];
    var someOtherDays = [
        'Wednesday',
        'Thursday'
    ];
    someOtherDays.push('Friday');
    someOtherDays.push(1); // items have to be string
    days.push(123); // can be number or string
}());
