// object type - we are explicitly assigning an object type to typscript.  Don't have to do it this way bc typescript already infers these values, but can add.
// const person: {
//   name: string;
//   age: number;
// } = {
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  // this marks a tuple, in typescript will create errors for those special array with exactly two elements - first element a number and second a string.  This is non-existent in javascript, but typescript does this in order to minimize errors.
  role: [number, string];
} = {
  name: "Jennifer",
  age: 30,
  hobbies: ["Sport", "Cooking"],
  // in a Tuple, will have only have 2 elements and is fixed
  role: [2, "author"],
};

//create an enum with a keyword - these are numbered like arrays, "ADMIN" = 0, "READ_ONLY" = 1, "AUTHOR" = 2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
//if don't want to start with the number 0, can add, for example, "ADMIN = 5" and this will start the numbering from that number and the others will follow w/o having to assign each identifiers

const person3 = {
  name: "Jenni",
  age: 30,
  hobbies: ["DIY", "Reading"],
  role: Role.ADMIN,
  //THIS WILL REFER TO THE ENUM AND WILL ASSIGN NUMBERS WHEN COMPLIED TO JS
};

// person.role.push("admin");
// person.role[1] = 10;

//tells Typescript that the array will eventually take in strings into the array
let favoriteActivities: string[];

//want to support a mixed array? Use this -
let exampleMixed: any[];

console.log(person);

//because it knows that hobby will be a string because hobbies is valued as a string so will allow you to uppercase
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
