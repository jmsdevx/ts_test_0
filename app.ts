//string
let myName = "James";

//number
let myAge = 25;

//bool
let hasHobbies = true;

//assign types
let myRealAge: number;
myRealAge = 1000;

//array
let hobbies: any[] = ["Cooking", "Sports"];
console.log(typeof hobbies);

//tuples
let address: [string, number] = ["Superstreet", 99];

//enum -- returns a number
enum Color {
  Gray, //0
  Green = 100, //100
  Blue //101
}

let myColor: Color = Color.Green;
console.log(myColor); //will log '100'

//any -- avoid using
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

//functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
  console.log("Hello!");
}

//argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(2, 10));

//function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData: { name: string; age: number } = {
  name: "James",
  age: 25
};
userData = {
  name: "hello",
  age: 22
};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//type alias (hold type in reusable format)
type Complex = { data: number[]; output: (all: boolean) => number[] };

//complex object with type alias
let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//union types
let myRealRealAge: number | string;

//check types - conditional action based on types
let finalValue = 25;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

//never
function neverReturns(): never {
  throw new Error("An error!");
}

//Nullable Types
let canBeNull: number | null = 12; //initialized w/ 12
canBeNull = null;
let canAlsoBeNull; //initialized w/ undefined
canAlsoBeNull = null;
