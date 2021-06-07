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

//Filter listings
const filter = {
    type: 'farm',
    minPrize: 1500, 
};
const filter1 = {
    type: 'farm',
    minPrize: 1500,
    hasGarden: true,
};

const filter2 = {
    type: 'farm',
    minPrize: 1500,
    hasGarden: true,
    minSize: 100
};

// this function does return the expected output, If I pass filter without all four attribtes. 
//How do I check undefined condition for those attribute. check functioan call below with filter and filter1
function filterListings(lists, filter){
    const filteredData = lists.filter( (list) => list.type.toLowerCase() === filter.type.toLowerCase() ) 
    .filter((list) => list.price >= filter.minPrize)
    .filter((list) => list.hasGarden === filter.hasGarden)
    .filter((list) => list.size >= filter.minSize)
     
    return filteredData;
} 

// If I pass filter without hasGarden and minSize. it is not working as expected. how i check undefined condition.
const farmListings = filterListings(lists, filter);
console.log(farmListings);

// If I pass filter1 without  minSize. it is not working as expected. how i check undefined condition.
const farmListings1 = filterListings(lists, filter1);
console.log(farmListings1);

// If I pass filter2 with all type, minPrize, hasgarden and minSize. it is working.

const farmListings2 = filterListings(lists, filter2);
console.log(farmListings2);

// second approch to fix above problem

function filterListings2(lists, filter)
{
    let filteredData = lists;
        if(filter.type !== undefined)
        {
            filteredData = filteredData.filter((list) => list.type.toLowerCase() === filter.type.toLowerCase()) ;  
        }
        if(filter.minPrize !== undefined)
        {
            filteredData = filteredData.filter((list) => list.price >= filter.minPrize);
        }
        if(filter.hasGarden !== undefined)
        {
            filteredData = filteredData.filter((list) => list.hasGarden === filter.hasGarden);
        }
        if(filter.minSize !== undefined)
        {
            filteredData = filteredData.filter((list) => list.size >= filter.minSize);
        }
    return filteredData;
} 

 

const farmListings_new = filterListings2(lists, filter);
console.log(farmListings_new);

const farmListings_new1 = filterListings2(lists, filter1);
console.log(farmListings_new1);

const farmListings_new2 = filterListings2(lists, filter2);
console.log(farmListings_new2); 