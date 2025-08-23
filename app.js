
function animal(name, speed, limitAge) {
    this.name = name;
    this.speed = speed;
    this.limitAge = limitAge;
}


animal.prototype.info = function () {
    return `Name: ${this.name}, Speed: ${this.speed} km/h, Limit Age: ${this.limitAge} years`;
};


const lion = new animal("Lion", 80, 15);
const eagle = new animal("Eagle", 300, 10);

console.log(lion.info()); 
console.log(eagle.info());
