
/*
    V8 Optimization

    V8 is an engine which essentially translates JavaScript code into machine code

`   With this in mind, there needs to be techniques to make this effective
    That's why code which is used more often is optimized more
    - Ignition interpreter - quick startup
    - TurboFan optimizing compiler - for code which is run more often

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

        func();

        if (canSample) {
            console.timeEnd(iterationKey, `Iteration ${i} end`);
        }        
    }

    console.timeEnd(label, "All End");
}

// Is only triggered once - uses Ignition interpreter - it's quick to start but slow to run
benchmark("add", () => {
    add(2, 5)
});

// This is triggered more times - uses TurboFan (optimizing compiler)
benchmark("add", () => {
    add(1, 4)
}, 10_000_000, 1_000_000);

