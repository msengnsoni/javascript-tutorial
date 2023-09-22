let input = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

let W = input[0];
let H = input[1];
let x = input[2];
let y = input[3];
let r = input[4];

if (x >= r && x <= (W-r) && y >= r && y <= (H-r)){
    console.log("Yes");
} else {
    console.log("No");
}