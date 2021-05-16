//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
let pos = names.indexOf(nameToRemove)
let removeItem = names.splice(pos,1)
console.log(removeItem);
console.log(names);
