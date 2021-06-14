function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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
const lists = generateListings(37);
console.log(lists);

 //1-Create 37 listings and log out every listings size
const listingSize = [];
lists.forEach(function(list){
    listingSize.push(list.size);
});
console.log("listingSize",listingSize);

//2-Create an array that contains all the 37 listing prices.
const listingPrice = lists.map(function(list){
    return list.price;
});
console.log("listingprize", listingPrice);

//3-Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
//if house price is less than 2277 that means is cheap
let cheapListing = lists.filter(list => list.price < 1000)
console.log("cheapListing", cheapListing);
cheapListing = lists
.filter(function(list){
    if(list.price < 1000)
    {
        return list;
    }
});
console.log("cheapListing :", cheapListing);  





/* const filter = {
    type: 'farm',
    minPrize: 1500, 
}; 


const filter1 = {
    type: 'farm',
    minPrize: 1500,
    hasGarden: true,
    minSize: 100
};

function filterListings(lists, filter){
    const filteredData = lists.filter( (list) => list.type.toLowerCase() === filter.type.toLowerCase() ) 
    .filter((list) => list.price >= filter.minPrize)
    .filter((list) => list.hasGarden === filter.hasGarden)
    .filter((list) => list.size >= filter.minSize)
     
    return filteredData;
}

const farmListings = filterListings(lists, filter1);
console.log(farmListings);

 const farmListings= filterListings(lists, filter);
console.log(farmListings); */

