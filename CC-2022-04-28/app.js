// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

//P: integers
//R: check if integer requires plurality
//E: given 0, results true
//   given 0.5, results true
//   given 1, results false
//PC: create a function to check if integer is plural or not
function plural(n) {
    return n == 1 ? false : true;
}

//OR

function plural(n) {
    return n !== 1;
}
