function Programmer(name, title, age, language) {
    this.name = name,
    this.title = title,
    this.age = age,
    this.language = language //,
    // this.print = function() {
    //    console.log(this.name, this.title, this.age, this.language)
    // }
}

Programmer.prototype.print = function() {
    console.log("Name: ", this.name, "\nTitle: ", this.title, "\nAge: ", this.age, "\nLanguage: ", this.language)
}

let Wade = new Programmer("Wade", "Developer", 30, "JavaScript");

// console.log(Wade);
// Wade.print();

console.log(Wade);
Wade.print();