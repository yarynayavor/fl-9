const fullDegree = 180;
let a = parseFloat(prompt('Enter length of size a:', '10'));
let b = parseFloat(prompt('Enter length of size b:', '20'));
let alpha = parseFloat(prompt('Enter angle in between:', '30'));

let findC = () => {
    let convertToRadians = alpha * Math.PI / fullDegree;
    let res = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(convertToRadians));
    return parseFloat(res.toFixed(2));
}

let c = findC();

let perymetr = () => {
    let res = a + b + c;
    return parseFloat(res.toFixed(2));
}

let fullP = perymetr();

let square = () => {
    let p = fullP / 2;
    let res = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return parseFloat(res.toFixed(2));
}

let s = square();

if (a !== isNaN && b !== isNaN && alpha !== isNaN) {
    if (a > 0 && b > 0 && alpha > 0 && c > 0 && s > 0) {
        console.log(`c length: ${c}` + '\n' +
            `Triangle square: ${s}` + '\n' +
            `Triangle perimeter: ${fullP}`);
    } else {
        console.log('Invalid data');
    }
} else {
    console.log('Invalid data');
}