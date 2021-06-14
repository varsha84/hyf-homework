/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
 function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}
//Create 37 listings and log out every listings size
/* const lists = generateListings(37);
const listingSize = lists.forEach((list) =>{
    console.log("listingSize :", list.size);
}); */

//Create an array that contains all the 37 listing prices.
 const lists = generateListings(37);
console.log(lists);
/*const listingPrize = lists.map((list)=> list.price);
console.log("listingPrize :", listingPrize); */

//Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
//if house price is less than 2277 that means is cheap
const cheapListing = lists
.filter((list)=>list.price < 2277)
console.log("cheapListing :", cheapListing) // it gives array of object

//Create an array of expensize listings prices. Each item in this array should be of type number
const expensiveListingPrice = lists.filter((list)=>list.price > 5000)
.map((list)=>list.price)
console.log("expensiveListingPrice",expensiveListingPrice) //it gives array of price

//Create an array of listings that have parking. Each item in this array should be of type object
const listingParking = lists.filter((list)=>list.facilities.includes("Parkering"))
console.log("listingParking: ",listingParking);

//Filter listings
function filterListings(listing, filter)
{
    const filteredData = listing.filter((list) => (filter.type !== undefined) && (list.type.toLowerCase() === filter.type.toLowerCase()) )
    .filter((list) => list.price >= filter.minPrize);
    
    return filteredData;
}

/* function filterListings2(listing, filter)
{ 
    for(i = 0; i < listing.length; i++)
    {
        if( (listing.type.toLowerCase() === filter.type.toLowerCase()) && 
            (listing.price <= filter.price) && 
            (listing.facilities.includes(filter.facilities)) )
        {
            console.log("abcd");

        }

    }
    
} */
const filter = {
    type: 'farm',
    minPrize: 1000
    
};
const filteredListings = filterListings(lists, filter);
console.log(filteredListings);