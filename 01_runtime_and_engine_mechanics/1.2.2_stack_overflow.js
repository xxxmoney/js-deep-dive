
/*
    Stack Overflow
*/

// The Stack itself has a limited size - going over it will cause a Stack Overflow error - this is a safety mechanism to prevent infinite loops and other issues that could cause the stack to grow indefinitely

let counter = 0;

// Because function as "label" are also stored on stack, we can use recursive function calls to fill up the stack - and eventually cause a Stack Overflow error
function recurse() {
    counter++;
    recurse();
}

// With this code we can see what is the limit of recursive calls
try {
    recurse();
}
catch (error) {
    console.error("Stack Overflow error occurred after " + counter + " recursive calls");
}

