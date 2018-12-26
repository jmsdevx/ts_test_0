"use strict";
//string
var myName = "James";
//number
var myAge = 25;
//bool
var hasHobbies = true;
//assign types
var myRealAge;
myRealAge = 1000;
//array
var hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies);
//tuples
var address = ["Superstreet", 99];
//enum -- returns a number
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); //will log '100'
//any -- avoid using
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "James",
    age: 25
};
userData = {
    name: "hello",
    age: 22
};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//complex object with type alias
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge;
//check types - conditional action based on types
var finalValue = 25;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never
function neverReturns() {
    throw new Error("An error!");
}
//Nullable Types
var canBeNull = 12; //initialized w/ 12
canBeNull = null;
var canAlsoBeNull; //initialized w/ undefined
canAlsoBeNull = null;
