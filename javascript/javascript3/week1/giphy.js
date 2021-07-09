function callback(){
    let searchWord = document.getElementById("searchWord").value;
    let limit = document.getElementById("count").value;
    if(!searchWord && limit)
    {
        alert(`please enter search word`);
    }
    else{
        searchImageByName(searchWord, limit);
    }
}
// searching a new trend(smile) and how many images we want to see at one time on html page

function searchImageByName(word, limit){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=XZwiXrqbIZ77BsTrA2ckwjp8cO7sjB5Z&limit=${limit}`)
    .then((res)=> res.json())
    .then((data)=>{
        clearData();
        renderImageData(data.data)
    })
}
// clear all images before searching new word

function clearData(){
    document.querySelectorAll("img").forEach(element =>{element.remove()
    });

}
function renderImageData(data){
    console.log(data)
    for(i = 0; i < data.length; i++){
        const img = document.createElement("img");
        img.setAttribute("src", data[i].images.fixed_height.url)
        document.querySelector(".display").appendChild(img);
    }
}
document.getElementById("btn").addEventListener("click",callback);

