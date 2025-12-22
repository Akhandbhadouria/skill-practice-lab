// stack => used in [premitive]
// heap =>used in [non-premetive]

let user_one={
    name:"akhand",
    age:20
}
let user_two=user_one;
user_two.name="sing";

console.log(user_two.name);

console.log(user_one.name);

// Types of Memory:
// '''''''''''''''''''''''''''''''''''''  Stack Memory:

// Stores primitive values (number, string, boolean, null, undefined, symbol, bigint) and function calls.

// Operates in LIFO (Last-In, First-Out) order.

// Fast but limited in size.

// '''''''''''''''''''''''''''''''''''''  Heap Memory:

// Stores objects, arrays, functions, etc.

// Used for dynamic memory allocation.

// Larger and slower than the stack.