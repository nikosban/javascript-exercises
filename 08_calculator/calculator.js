const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(n) {
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    result += n[i];
  }

  return result;
	
};

const multiply = function(n) {
  let result = 1;

  for (let i = 0; i < n.length; i++) {
    result *= n[i];
  }

  return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};


const factorial = function(n) {
	
  // declare result and assign it the value of n
  let result = n;

  // n is 0 or 1, the factorial is always 1
  if (n === 0 || n === 1) {return 1;}

  // If the n is bigger than, decrease the number until 1 (avoid infinite loop)
  while (n > 1) {
    n--;
    result = result * n;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
