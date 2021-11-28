//we don't know what the user will eventually input
//can store any value without getting any errors
let userInput: unknown;
let userName: string;

//unknown is more restrictive than any, bc
userInput = 5;
userInput = "Matt";

//needs an extra type check for unknown to assign a value with a type and will be better than using any bc makes sure can't do anything
if (typeof userInput === "string") {
  userName = userInput;
}

//this function returns type 'never' where it never produces a value
//this shows that this code is never intended to return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred! ", 500);
