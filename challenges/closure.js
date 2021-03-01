// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Closure gives a function access to its lexical environment. In laymans terms, it allows a function to grab things it wants from outside its local scope. Closure exists as soon as the function comes into being.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = 0;

const summation = (a) => {
let multi = a/a;
for (i = 0; i <= a; i++) {
  counter += (multi * i)
}
return counter
}
console.log(summation(3))