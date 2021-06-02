 console.log("Script loaded");

const products = getAvailableProducts();
console.log(products); 
 
function renderProducts(products) 
{
    const main = document.querySelector("main");
    const Ul =document.createElement("ul");
    main.appendChild(Ul);

    for(i = 0; i < products.length; i++)
    {
        const newLi = document.createElement("li");
        const productName = document.createElement("h1");
        productName.innerHTML = products[i].name;
        newLi.appendChild(productName);

        const productPrice = document.createElement("h3");
        productPrice.innerHTML = `price : ${products[i].price}`;
        newLi.appendChild(productPrice);

        const productRating = document.createElement("h3")
        productRating.innerHTML = `Rating : ${products[i].rating}`
        newLi.appendChild(productRating);
        
        Ul.appendChild(newLi);
    }
}

renderProducts(products);