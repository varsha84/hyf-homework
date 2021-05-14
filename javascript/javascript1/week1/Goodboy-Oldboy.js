//A dog age calculator
let dogYearOfBirth = 2017
let dogYearFuture = 2027
let dogYear = dogYearFuture-dogYearOfBirth
let shouldShowResultInDogYears = true
if(shouldShowResultInDogYears)

{
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
else
{
    console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`);
}
