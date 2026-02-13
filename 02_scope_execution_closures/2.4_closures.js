
//
// Closures
//

// Closure happens when we have a function inside another function
// We returns said inner function - this function "captures" the variables from its scope
// Why? Because the inner function may still need to access those variables when called outside of the outer function

function createCounter() {
    let count = 0; // This is captured by the inner function

    function increment() { // This is the inner function that forms the closure
        count++; // It can access and modify the captured variable
        return count; // It can also return the captured variable
    }

    function getValue() {
        return count; // This function can also access the captured variable
    }

    return {
        increment, getValue
    }
}

const { increment, getValue } = createCounter(); // We call the outer function to get the inner function (closure)

increment(); // Increases the inner variable count
increment(); // Increases the inner variable count again

// The inner function retains access to the variable count even after the outer function has finished executing
console.log("Counter value:", getValue()); // Wow - the increment really is basically incrementing a "hidden" variable, and it works!

const maxCount = 4;

for (var i = 0; i < maxCount; i++) {
    setTimeout(function() {
        console.log("Iteration var value:", i); // This will log 4 four times, because the inner function captures the variable i, which is shared across all iterations of the loop
        // The sharing happens because of var usage - because the var variable gets hoisted
    }, 100);
}

// Fixing this would be:
for (var i = 0; i < maxCount; i++) {
    function runTimeout(iteration) { // Here we have the iteration variable - which will be the copy of the current iteration i
        setTimeout(function() {
            console.log("Iteration var with closure value:", iteration); // This will now work, why?            
        }, 100);

        // This works because we are capturing a copy of the variable i for each iteration
        // We are essentially doing what let does under the hood in this case
    }

    runTimeout(i); // We pass the current i - this creates a new scope for each iteration - with the i value of each iteration
    // This pattern is called Immediately Invoked Function Expression (IIFE) - we are create a function and immediately invoke it
}

for (let i = 0; i < maxCount; i++) {
    setTimeout(function() {
        console.log("Iteration let value:", i); // This captures each iteration of the let variable
        // Because the let works differently - creating new binding for each iteration
        // Basically, a new copy of the variable is created for each iteration
        // So each capturing of the inner function captures the correct value of i for that iteration (like const i_0, const i_1, const i_2)
    }, 100);
}
