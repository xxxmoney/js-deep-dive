
//
// Hoisting
//

// As we know, JavaScript is interpreted - meaning the code is executed line by line
// While this is true, for some things, the JavaScript code is fristly "scaned" whole
// This happens for:
// - Function declarations
// - var declarations

// So this means that we can essentially call a function before it is declared
// - That's because it "is declared" - because the whole code was scanned and the functions were registered before running the first line of code

// Let's call function before it is declared
function sayHello() {
    console.log("Hello!");
}

// We decalre the funciton here - before the call
sayHello(); // This will work - because the whole code is firstly scanned, function declared, then this code runs

// Similar thing happens to var variables - but differently
console.log("myVar:", myVar); // This will print "undefined"
// The whole "wow" is that we can print a variable that was essentially "defined below" in code
// Also, the reason it will print undefined is because the value itself is set on the line code below

var myVar = 10; // The variable is declared and initialized here

// However, if we try to do the same thing with let or const - it will not work
try {
    console.log(myLet); // This will throw a ReferenceError - because let and const are not hoisted like var
} catch (error) {
    console.error("Error while printing myLet:", error.message);
}

let myLet = 20; // This will throw a ReferenceError - because let and const are not hoisted like var

// Small experiment - what if we try to call a function expression before it is declared?
console.log("sayHelloExpression:", sayHelloExpression); // This will again print "undefined"
try {
    sayHelloExpression(); // BUT this will throw a TypeError - because sayHelloExpr is not a function at this point
} catch (error) {
    console.error("Error while calling sayHelloExpression:", error.message);
}

var sayHelloExpression = () => {
    console.log("Hello from expression!");
}; // Because the function is declared here in code - that's why we cannot call it before - we can just log the variable, which as stated above, will be undefined

