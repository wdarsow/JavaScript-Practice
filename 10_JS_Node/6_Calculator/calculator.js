let operation = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);

// console.log(typeof(num1))

switch(operation) {
    case 'add':
        console.log(num1 + num2);
        break;
    case 'subtract':
        console.log(num1 - num2);
        break;
    case 'multiply':
        console.log(num1 * num2);
        break;
    case 'divide':
        console.log(num1 / num2);
        break;
    case 'remainder':
        console.log(num1 % num2);
        break;
    case 'exp':
        console.log(Math.pow(num1, num2));
        break;
    case 'algebra':
        console.log(eval(num1));
        break;
}

let equation = '4x+2=10'
let split1 = equation.split('=');
let split2 = split1[0].split('x');
let split3 = split2[1].split('+')
console.log('split1 ' + split1);
console.log('split2 ' + split2);
console.log('split3 ' + split3);