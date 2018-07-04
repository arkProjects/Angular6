let name = 'World';
let greeting = `Hello ${name}`;

console.log( greeting );

let person = {
    name: 'John',
    age: 32,
    location: 'Bangalore',
    getName: function() {
        return this.name;
    }
};

// let personRow = '<tr>' +
//     '<td>' + person.name + '</td>' +
//     '<td>' + person.age + '</td>' +
//     '<td>' + person.location + '</td>' +
// '</tr>';

let personRow = `<tr>
    <td>${person.getName()}</td>
    <td>${person.age}</td>
    <td>${person.location}</td>
</tr>`;

console.log( personRow );