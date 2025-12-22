const my_array=[1,4,2,3,"akhand", false ];

// SHALLOW COPIES -> if we make a shallow copie of array and make change then the changes also occour in the main array
// DEEP COPIES ->  do not effect original array.

// ***********************  methods of array  ***********************

                    my_array.push(9);
                    console.log(my_array);
                    my_array.pop() 
                    my_array.shift();
                    my_array.unshift(10);
                    console.log(my_array);
                    console.log(my_array.includes('akhand'));


//**********************  slice() & splice()  **********************

                    // slice makes the copy.
                    let fruits1 = ['apple', 'banana', 'cherry', 'date'];
                    let sliced1 = fruits1.slice(1, 3);  // ['banana', 'cherry']
                    console.log(fruits1);  // ['apple', 'banana', 'cherry', 'date']
                    // splice modefy the original string.
                    let fruits2 = ['apple', 'banana', 'cherry', 'date'];
                    let removed2 = fruits2.splice(1, 2);  // ['banana', 'cherry']
                    console.log(fruits2);  // ['apple', 'date']
                    // adding element while deleting using splice....
                    let nums = [1, 2, 5];
                    nums.splice(2, 0, 3, 4);  // insert 3, 4 at index 2
                    console.log(nums);  // [1, 2, 3, 4, 5]


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// **********************  adding 2 arrays **********************

//push;
let arr=[1,2,3];
let arr2=[4,5,6];
arr.push(arr2);
console.log(arr); //->push array to array, :[ 1, 2, 3, [ 4, 5, 6 ] ]

// concat;
let arr1=[1,2,3];
let arr3=[4,5,6];
let new_arr=arr1.concat(arr3); //->[ 1, 2, 3, 4, 5, 6 ]
console.log(new_arr);

//
const new_arr1=[... arr1,...arr3];
console.log(new_arr1);//-> [ 1, 2, 3, 4, 5, 6 ]

// arr.flat(length)-> convert all the subarray in the array to norman array. (length)-> we use infinity


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// **********************  creating an  arrays **********************

let s1=10;
let s2=20;
let s3=30;

console.log(Array.of(s1,s2,s3));

// unshift(element) Adds to the beginning, returns new length.
//shift() Removes from the beginning, returns removed element.

[1, 2, 3].map(x => x * 2);  // [2, 4, 6]
[1, 2, 3].filter(x => x % 2 === 0);  // [2]

//🔹 6. Testing Elements
[1, 2, 3].some(x => x > 2);  // true
[1, 2, 3].every(x => x > 0);  // true......Returns true if all elements pass the test.



