                                                                🧠 What is Async Code in JavaScript?


Async code (short for "asynchronous") in JavaScript refers to code that doesn't run in a straight, top-to-bottom sequence. Instead, it allows certain operations 
(like network requests or file reads) to happen in the background, without blocking the rest of the program.

This is essential because JavaScript is single-threaded, meaning it can do one thing at a time. Asynchronous code ensures that time-consuming tasks (like API calls) 
don't freeze the entire program while they complete.


-------------- Asynchronous Code --------------------
                console.log("1");
                setTimeout(() => {
                console.log("2");
                }, 1000);
                console.log("3");

                // Output:
                // 1
                // 3
                // 2   ← comes later, after 1 second

