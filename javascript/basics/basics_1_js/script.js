// ********************* dates and time *********************

let my_date=new Date();
console.log(my_date.toString());
console.log(my_date.toDateString());
console.log(my_date.toISOString());
console.log(my_date.toJSON());
console.log(my_date.toLocaleTimeString());

let dec_date=new Date(2023,0,7);    //  => months start with 0;
console.log(dec_date.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);//------  Date.now() returns the number of milliseconds from January 1, 1970, 00:00:00 UTC


// convert now time to second.
console.log(Math.floor(Date.now()/1000));
