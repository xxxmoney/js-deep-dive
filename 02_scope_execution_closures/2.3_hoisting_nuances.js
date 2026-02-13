
//
// Hoisting Nuances
//

// How about if we have defined a function and variable var with same name, what gets defined?

console.log(`test is: ${typeof(test)}`); // The answer is the function
// No matter the order of whether variable is first or function

var test = "This is a variable named test";

function test() {
    console.log("Inside test function");
}


// Temporal Dead Zone - 

value = "Some value"; // Global variable

console.log(`Outside block before, value is: ${value}`); // This will log the original value, because the block scope variable does not affect it

try {
    console.log(`Inside block, value is: ${value}`);

    let value = "Block value"; // This creates a new variable in the block scope, and the previous line is "poisoned" by the scope
    // The "poisoning" essentially means that the local variable value exists already, but cannot be accessed before its declaration, which is why it throws an error when we try to log it before the declaration - the log above
}
catch (e) {
    console.log(`Error: ${e.message}`); // Throws error - because we are defining local variable here with the same name
}

console.log(`Outside block after, value is: ${value}`); // This will log the original value, because the block scope variable does not affect it

