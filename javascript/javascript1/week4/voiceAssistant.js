//voice assistent program
let myname = "";
const toDoList = [];
function introduceName(command)
{
    const start = command.indexOf("is");
    const name = command.substring(start + 2).trim();

    if (name == "") 
    {
        console.log('Please enter your name')
        myname = prompt('What is your name?')
        return `Nice to meet you ${myname}`;
    } 
    else if (name === myname) 
    {
        return `Hey! ${name}, I know you already`;
    }
    myname = name
    return `Nice to meet you ${myname}`;
}

function addTodo(command)
{
    const start = command.indexOf("add");
    const end = command.indexOf("to my todo");
    const toDoItem = command.substring(start + 4, end - 1);
    toDoList.push(toDoItem);
    return `${toDoItem} added to your todo`;
}

function removeTodo(command)
{
    const start = command.indexOf("remove")
    const end = command.indexOf("from my todo");
    const toDoItem = command.substring(start + 7, end - 1);
    //find index of toDoItem
    const index = toDoList.indexOf(toDoItem);
    //if not -1 , delete that item from toDoList
    if (index !== -1) 
    {
        toDoList.splice(index, 1);
        return `${toDoItem} remove from your todo`;
    } 
    else
    {
        return `${toDoItem} is not in your todo`;
    }

}

function getTodoList(command)
{   
    let listOfItem = "";
    for (let i = 0; i < toDoList.length; i++) 
    {
        if (i === 0) 
        {
            listOfItem = toDoList[i];
        } 
        else if (i === toDoList.length - 1)
        {
            listOfItem = `${listOfItem}  and ${toDoList[i]}`;
        } 
        else 
        {
            listOfItem = `${listOfItem} , ${toDoList[i]}`;
        }
    }
    return `you have ${toDoList.length} todos - ${listOfItem}`;

}

function mathOperation(command)
{
    const arr = command.split(" ");
    const num1 = parseInt(arr[2]);
    const num2 = parseInt(arr[4]);
    if (arr[3] === "+") 
    {
        return num1 + num2;
    } 
    else if (arr[3] === "*") 
    {
        return num1 * num2;
    } 
    else if (arr[3] === "/") 
    {
        return num1 / num2;
    } 
    else if (arr[3] === "%") 
    {
        return num1 % num2;
    }
}

function timer(command)
{
    const arr = command.split(" ");
    let timer = 0;
    if (arr[arr.length - 1].includes("sec")) 
    {
        timer = arr[arr.length - 2] * 1000;
    } 
    else if (arr[arr.length - 1].includes("min")) {
        timer = arr[arr.length - 2] * 60000;
    } 
    else if (arr[arr.length - 1].includes("hour")) {
        timer = arr[arr.length - 2] * 360000;
    }
    setTimeout(function () {
        alert("Timer done!")
    }, timer);
    return `Timer set for ${arr[arr.length-2]} ${arr[arr.length-1]}`;
}

function getReply(command) 
{
    //hey there, my name is Varsha 
    command = command.toLowerCase();
    if (command.includes("my name is")) 
    {
        return introduceName(command);
    } 
    else if (command.includes("what is my name")) 
    {
        return `Your name is ${myname}`;
    } 
    else if (command.includes("to my todo")) 
    {
        return addTodo(command);
    } 
    else if (command.includes("from my todo"))
    {
        return removeTodo(command);
    } 
    else if (command.includes("what is on my todo"))
    {
        return getTodoList(command);
    } 
    else if (command.includes("what day is it today"))
    {
        const today = new Date();
        const dateArr = today.toString().split(" ");
        return `${dateArr[2]}.of ${dateArr[1]} ${dateArr[3]}`;
    }
    else if (command.includes("what is")) 
    {
        return mathOperation(command);
    }
    // timer for hour, minute and second
    else if (command.includes("set a timer for ")) 
    {
        return timer(command);
    }
}


console.log(getReply("Hello my name is varsha"));
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is"));
console.log(getReply("Hello my name is varsha"));
console.log(getReply("Hello my name is Sanju"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in shower to my todo"));
console.log(getReply("Add shopping from fotex to my todo"));
console.log(getReply("Add homework to github to my todo"));
console.log(getReply("remove shopping from fotex from my todo"));
console.log(getReply("remove shopping from fotex from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 3 / 3"));
console.log(getReply("set a timer for 1 minutes"));

