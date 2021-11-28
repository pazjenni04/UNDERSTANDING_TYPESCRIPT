function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // need to add the results of the numbers into this variable so that it avoids concatinating string and number transforming number into a string
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
let printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
