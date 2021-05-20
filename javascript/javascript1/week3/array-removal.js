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
const pos = names.indexOf(nameToRemove);
const removeItem = names.splice(pos,1);
console.log(removeItem);
console.log(names);
