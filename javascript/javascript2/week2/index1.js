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
//Arrow function

const listingSize = lists.map(list => list.size)
console.log("listingSize :", listingSize);

//2-Create an array that contains all the 37 listing prices.
// Arrow function

const listingPrice = lists.map((list)=> list.price);
console.log("listingPrize :", listingPrice); 

//3-Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
//if house price is less than 2277 that means is cheap
// Arrow function

const cheapListing = lists.filter((list)=>list.price < 2277)
console.log("cheapListing :", cheapListing) ;

//Create an array of expensize listings prices. Each item in this array should be of type number
const expensiveListingPrice = lists.filter((list)=>list.price > 5000)
.map((list)=>list.price)
console.log("expensiveListingPrice",expensiveListingPrice) //it gives array of price

//Create an array of listings that have parking. Each item in this array should be of type object
const listingParking = lists.filter((list)=>list.facilities.includes("Parkering"))
console.log("listingParking: ",listingParking); 

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

function filterListings(lists, filter){
    const filteredData = lists.filter( (list) => list.type.toLowerCase() === filter.type.toLowerCase() ) 
    .filter((list) => list.price >= filter.minPrize)
    .filter((list) => list.hasGarden === filter.hasGarden)
    .filter((list) => list.size >= filter.minSize)
     
    return filteredData;
} 

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

/* const farmListings = filterListings(lists, filter2);
console.log(farmListings2); */

const farmListings_new = filterListings2(lists, filter);
console.log(farmListings_new);

const farmListings_new1 = filterListings2(lists, filter1);
console.log(farmListings_new1);

const farmListings_new2 = filterListings2(lists, filter2);
console.log(farmListings_new2); 
 
function renderListings(listings)
{
    const body = document.querySelector("body");
    const table = document.createElement("table");
    body.appendChild(table);
    const tr = document.createElement("tr");
    table.appendChild(tr);
    for(const item  of ['Image', 'Type', 'Price', 'Size'])
    {
        const th = document.createElement("th");
        th.innerHTML = item;
        tr.appendChild(th);
    }    
    
    lists.forEach(list => {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        
        const td = document.createElement("td");
        const img = document.createElement("img");
        img.setAttribute("src", list.img);
        td.appendChild(img);
        tr.appendChild(td);

        const type = document.createElement("td");
        type.innerHTML = list.type;
        tr.appendChild(type);

        const price = document.createElement("td");
        price.innerHTML = list.price;
        tr.appendChild(price);

        const size = document.createElement("td");
        size.innerHTML = list.size;
        tr.appendChild(size);

    });
    
    /* const h1 = document.createElement("h1");
    tr.appendChild(h1); */


}

renderListings(lists);