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

const Circle1 = new Circle(10);
console.log(`Diameter of circle: ${Circle1.getDiameter()}`);
console.log(`Parameter of circle : ${Circle1.getCircumference()}`);
console.log(`Area of circle : ${Circle1.getArea()}`);

module.exports = Circle;



