
//
// Lexical Scope
//

// Scoping in JavaScript works interestingly for functions
// While one would expect the scope to be where the function is called, actually, it is where it's created

const hero = "Batman"; // Global variable for hero

function revealIdentity() {
    console.log(`Hero is: ${hero}`); // Logging the variable
}

function trap() {
    const hero = "Joker"; // Local variable - same name - for this scope, it "overrides" the hero variable
    revealIdentity(); // Still uses the global - that's because the revealIdentity is in the global scope

    function revealLocalIdentity() {
        console.log(`Local hero is: ${hero}`); // This will use the local variable, because it's in the same scope
    }

    return revealLocalIdentity;
}

const revealLocal = trap();
revealLocal(); // This still works for the local variable - because that's the scope of the function
