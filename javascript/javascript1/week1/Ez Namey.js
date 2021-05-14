//finding a startup name by creating some code!
const firstWords = ["Go","Exxon", "templafy", "airtame", "unity", "sitecore", "trustpilot","peakon","zendesk", "lunar", "vivino"];
const secondWords = ["more","mobil","platypus", "mtelsys", "epos", "Pleo","Forecast" ,"Labster", "Dixa", "botxo"];

function findStartupName()
{
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    let startupName = firstWords[number1] + secondWords[number2];
    console.log(`the startup name is ${startupName}. it contains ${startupName.length} charcters`); 
}

findStartupName();
