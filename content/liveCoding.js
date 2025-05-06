// timeout-closure.js

console.log("\n=== TIMEOUT CLOSURE ===");

function delayedPrinter(msg, delay) {
  console.log(`Setting up timer for "${msg}" (${delay}ms)`);

  setTimeout(() => {
    console.log(`>> Timer finished: ${msg}`);
  }, delay);
}

delayedPrinter("Hello after 1 second", 1000);
delayedPrinter("Hello after 2 seconds", 2000);
