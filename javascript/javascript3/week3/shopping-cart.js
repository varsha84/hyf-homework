class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    convertToCurrency(currency){
      
      let price = 0
      switch(currency){
        case "dollars": {
          price = this.price * 0.16
          price = price + ' $'
          break;
        }
        case "pounds":{
          price = this.price * 0.12
          price = price + ' £'
          break;
        }
        case "euros": {
          price = this.price * 0.13
          price = price + ' €'
          break;
        }
      }
      return price
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      // Implement functionality here
      const removeItem = this.products.filter(item => item.name !== product.name)
      this.products = removeItem;
    }
  
    searchProduct(productName) {

      // Implement functionality here
      const searchProduct = this.products.filter(item => item.name === productName);
      const trs = document.querySelectorAll(".data-row");
      trs.forEach(tr => tr.remove());
      this.renderProducts(searchProduct);
      return searchProduct;
    }
  
    getTotal() {
      // Implement functionality here
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const totalProductsPrice = this.products.map(product => product.price).reduce(reducer,0);
      return totalProductsPrice;

    }
    renderProducts(products) {
      const table = document.querySelector("table > tbody");
      products.forEach(product => {
        const tr = document.createElement("tr");
        tr.setAttribute("class", "data-row");
        const product_td = document.createElement("td");
        product_td.innerText = product.name;
        const price_td = document.createElement("td");
        price_td.innerText = `${product.price} dkk`;
        tr.appendChild(product_td);
        tr.appendChild(price_td);
        table.appendChild(tr);
      })
    }
  
    getUser() {
      // Implement functionality here
      return new Promise((resolve, reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=> res.json())
        .then((data)=> {
          this.renderProducts(this.products)
          this.getTotal()
          resolve(data)
        console.log("promise resolved")})
        .catch((e)=>reject(e));
      })
    }
  }
  
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const rectangleScreen = new Product("rectangle-screen", 2000);
const squareScreen = new Product("square-screen", 3000);
const lightScreen = new Product("light-screen", 6000);
const thickScreen = new Product("thick-screen", 1000);
const newScreen = new Product("new-screen", 5000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(rectangleScreen);
shoppingCart.addProduct(squareScreen);
shoppingCart.addProduct(lightScreen);
shoppingCart.addProduct(thickScreen);
shoppingCart.addProduct(newScreen);

console.log(shoppingCart.products);

shoppingCart.removeProduct(rectangleScreen);
console.log(shoppingCart.products);

console.log(shoppingCart.getTotal());

console.log(shoppingCart.getUser());

console.log(`${flatscreen.name} price is ` + flatscreen.convertToCurrency("dollars"));

const input = document.querySelector("#search-bar");

input.addEventListener("input", (e)=>{
  console.log(e.target.value)
  if (e.target.value != ""){
    shoppingCart.searchProduct(e.target.value)
  }else{
    shoppingCart.renderProducts(shoppingCart.products)
  }
})

 
 

