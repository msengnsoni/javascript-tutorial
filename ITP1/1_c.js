let x = require("fs").readFileSync("/dev/stdin", "utf8");
let array = x.split(" ").map(Number);

let area = array[0] * array[1];
let perimeter = (array[0] * 2) + (array[1] * 2);

console.log(area + " " + perimeter);