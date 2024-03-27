const sumAll = function(n1, n2) {


    // Check if input is negative or not a number
    if (n1 < 0 || n2 < 0 || (typeof(n2)) != "number" || isNaN(n2)) {return "ERROR"}

    // declare sum and assign to 0
    let sum = 0;

    if (n1 < n2) {
        for (i = n1; i <= n2; i++) {
            sum += i;
        }
    }

    else {
        for (i = n2; i <= n1; i++) {
            sum += i;
        }
    }


    // As long as i is smaller, repeat the addition
    

    // Return the sum value
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
