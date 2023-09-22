let x = parseInt(require("fs").readFileSync("/dev/stdin", "utf8"));

let hours = x / 3600 | 0;
let minutes = (x % 3600) / 60 | 0;
let seconds =  (x % 60 % 60);

console.log(hours + ":" + minutes + ":" + seconds);