(function() {
    let john : any = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 32
    };

    // object structure is infered and no changes are allowed
    john.phone = 1234; // error
    john.age = 'Thirty two'; // error
}());