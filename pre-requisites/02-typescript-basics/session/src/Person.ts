export class Person {
    public name: string; // cannot be used outside the class
    private _age: number;
    protected readonly aadhaarNumber: number; // can be used in inherited classes
    private address? : string;
    // private phone: number; // this is automatically added


    constructor( name : string, age : number, aadhaarNumber : number, private phone : number ) {
        this.name = name;
        this._age = age;
        this.aadhaarNumber = aadhaarNumber;
        // this.phone = phone; // this is added automatically since access specifier is present in constructor argument
    }

    getAge() {
        return this._age;
    }

    setAge( age ) {
        this._age = age;
    }
}

let radha = new Person( 'Radha', undefined, 1234567890, 2345678 );
radha.aadhaarNumber = 4567890123;

interface ProjectMember1 {
    skills1: string[],
    addSkills: ( skill : string ) => void
}

interface ProjectMember2 {
    skills2: string[]
}

class Employee extends Person implements ProjectMember1, ProjectMember2 {
    public skills1: string[];
    public skills2: string[];

    public name: string; // if you repeat a property in imherited class it should have same access specifier and type

    constructor( name : string, age : number, aadhaarNumber : number, phone : number, private _department : string ) { 
        super( name, age, aadhaarNumber, phone );
        // this._department = _department; // done automaticallly
        console.log( this.aadhaarNumber ); // protected - so no problem accessing in derived class
        console.log( this.name ); // public - hence accessible anywhere
    }

    addSkills( skill : string ) : void {
        this.skills1.push( skill );
    }
}