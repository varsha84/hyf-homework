console.log("inside warmup file");

 class Circle {
    constructor(radius) {
       this.radius = radius;
    }
    getDiameter(){
        return 2*this.radius;
    }
    getCircumference(){
    return 2*3.14*this.radius;
    }
    getArea(){
        return 3.14*(this.radius*this.radius);
    }

}


module.exports = Circle;



