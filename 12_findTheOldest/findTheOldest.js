const findTheOldest = function(people) {
return people.filter((age) => age > yearOfDeath - yearofBirth);
};

// Do not edit below this line
module.exports = findTheOldest;
