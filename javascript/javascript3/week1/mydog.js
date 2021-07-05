/* setInterval(
    () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector("img").setAttribute("src",data.message);
        })}, 2000); */
function renderListOfBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data);
        console.log(data.message);
        const breeds = Object.keys(data.message);
        const ul = document.createElement("ul");
        document.body.appendChild(ul);
        breeds.forEach((breed) =>{
            const li = document.createElement("li");
            li.innerHTML = breed;
            ul.appendChild(li);
        });
    });
}
renderListOfBreeds();