// this command line Node application checks to see whether 2 user supplied arguments are equal
let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(arg1);
console.log(arg2);

let argCheck = function(parm1, parm2) {
    if(parm1 == parm2) {
        console.log('Equal arguments');
    } else {
        console.log('The arguments are not equal');
    }
}

argCheck(arg1, arg2);