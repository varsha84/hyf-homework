//weather wear

function weatherWear(temprature)
{
    if(temprature <= 0)
    {
        return "wear long winter jacket, snow suits, warm cap, glubes, winter shoes ";
    }
    else if(temprature <= 10)
    {
        return "wear winter jacket, sweater, jeans and warm cloths";
    }
    else if(temprature <= 15 )
    {
        return "wear thin jacket, shirt, pant, sweater";
    }
    else if(temprature <= 25 )
    {
        return "wear shorts, skirt";
    }
    else if(temprature <= 35)
    {
        return "wear beach clothes";
    }
    
    return" stay at home";
}
    console.log(weatherWear(23));
    console.log(weatherWear(8));
    console.log(weatherWear(0));
    console.log(weatherWear(14));
    console.log(weatherWear(32));
