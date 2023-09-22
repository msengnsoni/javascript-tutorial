let x = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(Number);
let a = x[0]; // 3
let b = x[1]; // 8
let c = x[2]; // 1

if ( a > b ) {
    let t = a;
    a = b;
    b = t;
} // a= 3, b = 8, c = 1

if ( b > c ) {
    let t = c;
    c = b;
    b = t;
} // a = 3, b = 1, c = 8

if ( a > b ) {
    let t = a;
    a = b;
    b = t;
} // a = 1, b = 3, c = 8

console.log(a+" "+b+" "+c);