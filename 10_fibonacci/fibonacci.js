const fibonacci = function(pos) {

if (pos < 0) {return "OOPS"} 

let fib = [0,1];

for (let i = 2; i <=25; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    position = fib[pos];
    
}

return position;


};

// Do not edit below this line
module.exports = fibonacci;
