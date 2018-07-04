let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// let first = days[0], second = days[1], fourth = days[3], eighth = days[7];
// Always ask "What variable am I creating?" - here: first, second etc.
let [ first, second, , fourth, , , , eighth = 'Holiday', ninth ] = days;
console.log( first, second, fourth, eighth, ninth );