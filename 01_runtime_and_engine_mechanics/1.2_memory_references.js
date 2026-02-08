
/*
    Memory references

    JavaScript also manages Stack and Heap
     - Stack - for primitive values (number, string, boolean, null, undefined) - stored directly in the stack
     - Heap - for objects (arrays, functions, objects) - stored in the heap and a reference to it is stored in the stack     
*/

// Firstly to explain the assignment operator - the "="
// It works simply - it just sets a value to Stack under a "label"

// So in this case, we create new varible - so in stack, there's a new "label" numberOne, and we set the value of 5 to it
// For existing variables, it just set new value in Stack to existing "label" - so it just updates the value in Stack
const numberOne = 5;
/*
Stack:
    ...
    numberOne -> 5
    ...
*/
const numberTwo = numberOne; 
/*
In case of numberTwo, it copies value of numberOne - so it looks for "label" numberOne, CTRL+C and CTRL+V's the value under new "label"

Stack:
    ...
    numberOne -> 5
    numberTwo -> 5
    ...
*/
console.log(numberOne, numberTwo); // Should be the primitive value of 5 and 5 (NOT reference to the same value, just the same primitive value)

const userOne = {
    name: "Peparoni"
};
/*
Stack:
    ...
    userOne -> #1
    ...

Heap:
    ...
    #1 -> { name: "Peparoni" }
    ...
*/
const userTwo = userOne;
/*
In case of userTwo, it essentially works similarly - in Stack, it again does CTRL+C and CTR+V - but this time, it's not the direct value, it's a reference to Heap - so it copies the reference - the pointer

Stack:
    ...
    userOne -> #1
    userTwo -> #1
    ...

Heap:
    ...
    #1 -> { name: "Peparoni" }
    ...
*/
console.log(userOne, userTwo); // Should be the same reference to the same object in the heap - so it should print the same object for both userOne and userTwo

// In functions, it essentially copies the stack values again - so user will have the reference, newAge is primitive value - just copies the value
function changeUserAge(user, newAge) {
    user.age = newAge;
}
// This function call will "change the userOne" - because both userOne and userTwo point to the same reference
changeUserAge(userTwo, 30);
console.log(userOne, userTwo); // Should show the updated age for both userOne and userTwo  


// In this function, the user is a new variable - local to the function - so if we change it, it should change just the local varible in stack - think of it as new variable "user" is created in Stack
function reassignUser(user) {
    user = { name: "New User" }
}
// Now - what will happen with this function call?
// Simply - it should just reassign the local variable "user" in Stack, meaning the original userOne and userTwo should still point to the same reference in Heap - so it should not change the original object
reassignUser(userTwo);
console.log(userOne, userTwo); // Should still show the original user object, because reassignUser only changes the local reference

