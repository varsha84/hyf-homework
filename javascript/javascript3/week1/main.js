fetch("http://api.open-notify.org/astros.json")
.then(res => res.json())
.then(data =>{
    console.log(data);
    renderNumbers(data.number);
    renderName(data);
});
 function renderNumbers(number){
    const h1 = document.createElement("h1");
    h1.innerHTML = `There are ${number} astronauts in space, they are:`
    document.body.appendChild(h1);
}
function renderName(data){
    const ul = document.createElement("ul");
    data.people.forEach(person=> {
        const li = document.createElement("li");
        li.innerHTML = person.name;
        ul.appendChild(li);       
    });
    document.body.appendChild(ul);
} 
/* function renderName(data){
    const h1 = document.createElement("h1");
    h1.innerHTML = `There are ${data.number} astronauts in space, they are:`;
    document.body.appendChild(h1);
    const ul = document.createElement("ul");
    data.people.forEach(person => {
        const li = document.createElement("li");
        li.innerHTML = person.name;
        ul.appendChild(li);
        
    });
    document.body.appendChild(ul);
}
 */
