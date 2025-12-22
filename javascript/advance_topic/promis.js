// const promis_one = new Promise(function (resolve, reject) {
//     console.log("hey ");
//     setTimeout(function () {
//         console.log("after 2 second");
//         resolve() // used to finish the promis and run the resolve part----(.then)

//     }, 1000)

// })

// promis_one.then(function () { // when the promis get consumed
//     console.log("promis comsume");

// })


// // ----------------------------------2nd method of creating promis----------------------------------
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("hey ita aa 2nd promis");
// resolve();
//     }, 1000)
// }).then(function () {
//     console.log("promis resolved");

// })

// ----------------------------------3nd method of creating promis----------------------------------

const promis_three = new Promise(function (resolve, reject) {
   
    setTimeout(function () {
       
        resolve({user:"akhand",age:21}) 

    }, 1000)

})

promis_three.then(function (data) { // when the promis get consumed
    console.log(data);

})


