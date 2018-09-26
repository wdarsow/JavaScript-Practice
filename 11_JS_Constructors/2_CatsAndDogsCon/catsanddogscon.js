function Animal(raining, noise) {
    this.raining = raining,
    this.noise = noise,
    this.makeNoise = function(){
        if(this.raining === true) {
            console.log(this.noise);
        }
    }
}

let dogs = new Animal(true, "Woof!");
let cats = new Animal(false, "Meow");

console.log(dogs);
console.log(cats);

cats.raining = true;
cats.makeNoise();

function massHysteria(dogs, cats) {
    if(dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria(dogs, cats);