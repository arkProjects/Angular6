"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    // private phone: number; // this is automatically added
    function Person(name, age, aadhaarNumber, phone) {
        this.phone = phone;
        this.name = name;
        this._age = age;
        this.aadhaarNumber = aadhaarNumber;
        // this.phone = phone; // this is added automatically since access specifier is present in constructor argument
    }
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.setAge = function (age) {
        this._age = age;
    };
    return Person;
}());
exports.Person = Person;
var radha = new Person('Radha', undefined, 1234567890, 2345678);
radha.aadhaarNumber = 4567890123;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, aadhaarNumber, phone, _department) {
        var _this = _super.call(this, name, age, aadhaarNumber, phone) || this;
        _this._department = _department;
        // this._department = _department; // done automaticallly
        console.log(_this.aadhaarNumber); // protected - so no problem accessing in derived class
        console.log(_this.name); // public - hence accessible anywhere
        return _this;
    }
    Employee.prototype.addSkills = function (skill) {
        this.skills1.push(skill);
    };
    return Employee;
}(Person));
