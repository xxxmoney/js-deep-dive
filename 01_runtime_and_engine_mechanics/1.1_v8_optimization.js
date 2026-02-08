
/*
    V8 Optimization

    V8 is an engine which essentially translates JavaScript code into machine code

`   With this in mind, there needs to be techniques to make this effective
    That's why code which is used more often is optimized more
    - Ignition interpreter - quick startup
        - Is takes the code and execuites it diretly - INTERPRETS
    - TurboFan optimizing compiler - for code which is run more often
        - This TRANSLATES the code into machine code - which is slower, but more effective is long run - as it can remember it and then run faster
        - It works as cache - for function name, and parameter types, it caches the machine code (if the function is then called with different parameter types, it uses the de-optimized Ignition interpreter)
        - Importantly, it DOES NOT cache the return value itself - it just stores the translated machine code of the function - in this example the "add"        

    See the example below - simple example measuring the "add" method (using helper benchmark method)
*/

function add(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

function benchmark(label, func, iterationCount = 1, samplingCount = 1) {
    console.time(label, "All Start");

    for (let i = 0; i < iterationCount; i++) {
        const iterationKey = `Iteration_${i}`;      
        const canSample = i === 0 || i % samplingCount === 0;

        if (canSample) {
            console.time(iterationKey, `Iteration ${i} start`);
        }                

        func(i);

        if (canSample) {
            console.timeEnd(iterationKey, `Iteration ${i} end`);
        }        
    }

    console.timeEnd(label, "All End");
}

// Is only triggered once - uses Ignition interpreter - it's quick to start but slow to run
benchmark("add", (_) => {
    add(2, 5)
});

// This is triggered more times - uses TurboFan (optimizing compiler)
// Take note - at 5_000_000 - it is slower due to Garbage Colleciton
benchmark("add", (i) => {
    if (i === 2_000_000) {
        add("Hello", 4) // Simulate unusual execution at 2 million - in this case, it won't be able to use the optimised version, so it uses the interpreter
    }
    else {
        add(1, 4)
    }
}, 10_000_000, 1_000_000);

