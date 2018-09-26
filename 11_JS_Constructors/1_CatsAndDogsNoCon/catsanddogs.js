const dogs = {
    raining: true,
    noise: "woof!",
    makeNoise: function () {
        if(this.raining) {
            console.log(this.noise);
        }
    }
}

const cats = {
    raining: true,
    noise: "Meow!",
    makeNoise: function () {
        if(this.raining) {
            console.log(this.noise);
        }
    }
}

let massHysteria = function(parm1, parm2) {
    console.log(dogs, cats);
    if(dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);