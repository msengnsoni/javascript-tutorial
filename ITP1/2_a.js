let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number);
let a = array[0];
let b = array[1];

let symbol;
if (a == b) {
    symbol = "a == b"
} else if (a < b){
    symbol = "a < b"
} else if (a > b){
    symbol = "a > b"
}

console.log(symbol);