function Character (name, profession, gender, age, strength, hitpoints) {
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hitpoints = hitpoints,
    this.printstats = function() {
        console.log(`Name: ${name}, Profession: ${profession}, Gender: ${gender}, Age: ${age}, Strength: ${strength}, Hitpoints: ${hitpoints}`);
    },
    this.isAlive = function() {
        if(hitpoints > 0) {
            console.log(`${name} is still alive!`);
        } else {
            console.log(`${name} is NOT alive!`);
        }
    },
    this.attack = function(opponent) {
        console.log(`${opponent.name}'s hitpoints is ${opponent.hitpoints}`);
        opponent.hitpoints -= strength;
        console.log(`${opponent.name}'s hitpoints is now ${opponent.hitpoints}`);
    },
    this.levelUp = function() {
        age += 1;
        strength += 5;
        hitpoints += 25;
        console.log(`${name}'s age is ${age} strength is ${strength} hitpoints are ${hitpoints}`);
    }
}

let player1 = new Character("Jim", "Analyst", "Male", 25, 50, 100);
let player2 = new Character("Tom", "Developer", "Male", 28, 45, 90);

// checks the current stats of the players
player1.printstats();
player2.printstats();

// checks to see if a player is alive
player1.isAlive();
player2.isAlive();

// attacks are initiated
player1.attack(player2);
player2.attack(player1);

// level up methods
player1.levelUp();
player2.levelUp();



