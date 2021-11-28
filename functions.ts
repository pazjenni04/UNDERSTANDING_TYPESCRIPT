function add(n1: number, n2: number) {
  return n1 + n2;
}

//another type is 'undefined' - if we set it to undefined then will always return undefined with no value
//if you have a return then can use undefined VS void
function printUndefined(num: number): undefined {
  console.log("Result: " + num);
  return;
}

//this is a special return type - void.  Means that this function doesn't have a return statement and executes a code, but doesn't return anything
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//can set a variable to a function - example
//function types are created with () => arrow function
let combineValues: (a: number, b: number) => number; //should accept any function that accepts parameters that are numbers and should result into a number

// let combineValues: Function;

//if tried to revalue combineValues to a number, then typescript will know that it supposed to be a function VS a number
//if combineValues was revalued to a number then when the below executes, then it will throw an error because it's expecting
//a function to execute the code
console.log(combineValues(8, 8));
