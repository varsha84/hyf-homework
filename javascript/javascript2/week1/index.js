//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const wordLength = [] ;
function getShortestWord()
{
    let shortWord = danishWords[0];

    for(let i = 0; i <danishWords.length; i++)
    {
        if(danishWords[i].length < shortWord.length)
        {
            shortWord = danishWords[i];
        }
    }
    return shortWord;
}
const word = getShortestWord(danishWords)
console.log(`shortest word in array is: ${word}`);


//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
let objectLetters = {};
function danishLetters()
{    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for(let i = 0; i < danishString.length; i++)
    {
        switch(danishString[i])
        {
            case "æ": count1 = count1 + 1; 
            break;
            case "ø": count2 = count2 + 1;
            break;
            case "å": count3 = count3 + 1;    
            break;      
        }
    }   
   const total = count1 + count2 + count3;
   return {total : total, æ : count1, ø: count2, å : count3};
}
const lettersCount  = danishLetters(danishString)
console.log(lettersCount);




