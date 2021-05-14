//calculate age
let birthYear = 1984;
let futureYear = 2027;

function calAge(birth, future)
{
    return future - birth;
}

let age = calAge(birthYear, futureYear);
console.log(`You will be ${age} years old in ${futureYear}`);
