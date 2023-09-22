let x = parseInt(require("fs").readFileSync("/dev/stdin", "utf8"));
x = x * x * x;
console.log(x);