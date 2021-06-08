//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
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
function danishLetters()
{    
    let letterCountÆ = 0;
    let letterCountØ = 0;
    let letterCountÅ = 0;

    for(let i = 0; i < danishString.length; i++)
    {
        switch(danishString[i])
        {
            case "æ": letterCountÆ = letterCountÆ + 1; 
            break;
            case "ø": letterCountØ = letterCountØ + 1;
            break;
            case "å": letterCountÆ = letterCountÆ + 1;    
            break;      
        }
    }   
   const total = letterCountÆ + letterCountØ + letterCountÅ;
   return {total : total, æ : letterCountÆ, ø: letterCountØ, å : letterCountÅ};
}
const lettersCount  = danishLetters(danishString)
console.log(lettersCount);






