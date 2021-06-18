let countS = 0;
let countL = 0;
let confetti = "";
function countKeyPress(e){ 
    let userKey = e.key.toLowerCase()
    if(userKey === "s"){
        countS++;
        document.querySelector("#countS").innerHTML = countS;
    }
    if(userKey === "l"){
        countL++;
        document.querySelector("#countL").innerHTML = countL;
    }
}

const startGame = function(){
     //add key press listner
    document.addEventListener("keydown", countKeyPress)
    //set timeout
    const delay = document.querySelector("#input-time").value;
    setTimeout(stopGame, delay*1000)
    console.log("Game Start")
}

const stopGame = function(){
    alert("your time up!!")
    //after timer remove key press listner
    document.removeEventListener("keydown", countKeyPress)
    const div = document.createElement("div");
    div.setAttribute('id', 'confetti')
    const canvas =  document.createElement("canvas");
    canvas.setAttribute('id', 'setCanvas')
    div.appendChild(canvas);
    
    if(countS > countL){
        document.querySelector('#playerL').appendChild(div);
        console.log("player with keypress S has win game")        
    }
    else if(countL > countS){
        document.querySelector('#playerR').appendChild(div);
        console.log("player with keypress l has win game")         
    }
    else{
      alert("both have equal points, match tie");
      return
    }
    const confettiSettings = { target: "setCanvas"};
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render(); 
}
const restart = document.querySelector("#restart-btn");
restart.addEventListener("click", function(){
    document.querySelector("#input-time").value = "";
    document.querySelector("#countS").innerHTML = 0;
    document.querySelector("#countL").innerHTML = 0;
    countL = 0;
    countL = 0;
    confetti.clear();
    document.querySelector('#confetti').remove();

});

document.querySelector("#start-btn").addEventListener("click", startGame);


