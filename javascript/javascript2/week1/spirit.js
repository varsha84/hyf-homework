//Spirit animal name generator
const spiritNames = [
    "The Butterfly", 
    "The Spider",
    "The Crow",
    "The Owl",
    "The Hummingbird",
    "The Hawk",
    "The Grasshopper",
    "The Eagle",
    "The Lion",
    "The Tiger"
    ]
function spiritNameGenerator()
{
    return spiritNames[parseInt(Math.random()*10)]
}

function spiritAnimalListener()
{
    let userName = document.querySelector("#input-name");
    const textMsg = document.querySelector("#spirit-name")
    if (userName.value !== "")
    {
        textMsg.innerHTML = `${userName.value} - ${spiritNameGenerator()}`;
    }
    else 
    {
        textMsg.innerHTML = "please enter your name";
    }
}

const selectBox = document.querySelector("#select-action")
selectBox.addEventListener("change",onSelectChange)


const myButton = document.querySelector(".btn");
myButton.addEventListener("click", spiritAnimalListener);


function onSelectChange()
{
    console.log("enter in option selection");
    const selectItem = document.querySelector("#select-action");
    if(selectItem.selectedIndex == 1)
    {
        myButton.addEventListener("click", spiritAnimalListener);
        myButton.removeEventListener("mouseover",spiritAnimalListener);

    }
    else if(selectItem.selectedIndex == 2)
    {
        myButton.addEventListener("mouseover",spiritAnimalListener);
        myButton.removeEventListener("click", spiritAnimalListener);

    }
    else
    {
        myButton.addEventListener("click", spiritAnimalListener);
        myButton.removeEventListener("mouseover",spiritAnimalListener);
    }
}

