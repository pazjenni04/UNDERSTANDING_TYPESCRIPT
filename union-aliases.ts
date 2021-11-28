//can assign a union type into a type alias and so can recall in code multiple times to avoid repitition of code
//can code more complex codes where you can save code, be clearer with intentions, and minimize errors
type Combinable = number | string;

//this is a union type - usefule when needing to either combine numbers or combine strings
//union types allows you to be more flexible with your code
//can add a third type - literal types
function combine(
  input1: Combinable,
  input2: number | string,
  //resultConversion is considered a literal type here bc it is assigning only this value to the identifier
  resultConversion: "as-number" | "as-text"
) {
  let result;
  //this allows us to reassign the value in the if statement 'let result'

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    //if two numbers than add both numbers
    result = +input1 + +input2;
  } else {
    //converts both to two strings - forces you to always work with either numbers or either strings (consistent)
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === "as-number") {
  //   //forces that all of them return as a number
  //   return +result;
  // } else {
  //   //forces to return as a string
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-number");
console.log(combinedNames);
//union types allows you to concatinate or add two different types of values
