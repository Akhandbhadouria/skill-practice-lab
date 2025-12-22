// IIFE in JavaScript (Immediately Invoked Function Expression)

(function() {
    // code inside the IIFE
    console.log("IIFE executed!");
})();  // we have to end the code ....by using ; after the function

/*Why use an IIFE?
✅ Avoid polluting the global scope (useful in older JS versions).

✅ Create a private scope to protect variables from being accessed or overwritten.

✅ Run some code once, like initialization logic.*/



// false values=> false,0,-0,null.nan, undefined.

// true values => "0", "false", " ", [], {}, function(){}