 console.log("Script loaded");

const products = getAvailableProducts();
console.log(products); 
 
function renderProducts(products = getAvailableProducts()) 
{
    const content = document.querySelector("#content");
    const ul =document.createElement("ul");
    content.appendChild(ul);

    for(i = 0; i < products.length; i++)
    {
        const newLi = document.createElement("li");
        const productNameHeading = document.createElement("h1");
        productNameHeading.innerHTML = products[i].name;
        newLi.appendChild(productNameHeading);

        const productPrice = document.createElement("h3");
        productPrice.innerHTML = `price : ${products[i].price}`;
        newLi.appendChild(productPrice);

        const productRating = document.createElement("h3")
        productRating.innerHTML = `Rating : ${products[i].rating}`
        newLi.appendChild(productRating);
        
        ul.appendChild(newLi);
    }
}

renderProducts();
// get user input
const searchName = document.querySelector("#search-name");
const searchPrice = document.querySelector("#search-price");
const searchRating = document.querySelector("#search-rating");
    
searchName.addEventListener("keyup",searchNameListener);
searchPrice.addEventListener("keyup",searchPriceListener);
searchRating.addEventListener("keyup",searchRatingListener);


// clear DOM
function clear(){
    const ul = document.querySelector("#content > ul");
    ul.remove();

}

function searchNameListener(e){
    const data = products.filter(product =>product.name.toLowerCase().includes(searchName.value.toLowerCase()));
    clear();
    renderProducts(data);
}

function searchPriceListener(e){
    if(searchPrice.value == ""){
        renderProducts(products);
        
    }
    else{
        const data = products.filter(product =>product.price < parseInt(searchPrice.value));
        clear();
        renderProducts(data);
    }
}

function searchRatingListener(e){
    if(searchRating.value == ""){
        renderProducts(products);
        
    }
    else{
        const data = products.filter(product =>product.rating === parseInt(searchRating.value));
        clear();
        renderProducts(data);
    }

}

