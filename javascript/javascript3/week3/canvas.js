 //Paint a circle to a canvas element
//Class creation time!
class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(){
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }

}
const c1 = new Circle(50, 50, 40, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(100, 50, 50, 0, 2 * Math.PI, "#ff0000");
c1.draw(); 
c2.draw();

//Now lets make art! and Every 100ms create a new circle instance and draw that to the canvas.The circle should have random x, y, radius and color. For giving the circle a random color

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor(){
    const Color = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + Color;
    return randomColor;
}

function drawCircle(){
    setTimeout(() =>{
        const x = getRandomNumber(70,5)
        const y = getRandomNumber(70,8)
        const r = getRandomNumber(60,3);
        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        const randomColor = getRandomColor();
        const c = new Circle(x, y ,r ,startAngle,endAngle,randomColor); 
        c.draw();  
    }, 100);
}
drawCircle();  
//Follow the mouse - optional
//canvas defalt width and height 300 * 150 so it will draw only with in area.

 function circleArroudCurser() {
    const el = document.querySelector("#canvas");
    el.addEventListener("mousemove",(e)=>{
        console.log(e);
        const x = e.clientX;
        const y = e.clientY;
        const r = getRandomNumber(60,3);
        const startAngle = 0;
        const endAngle = 2 * Math.PI;
        const randomColor = getRandomColor();
        const c = new Circle(x, y ,r ,startAngle,endAngle,randomColor); 
        c.draw()}); 
}
circleArroudCurser();   

