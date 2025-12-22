 // ********************************************.. DESTRUCTURING object..********************************************

const js_user={
    name:"akhand",
    age:20,
    location: "dhannipur",
    is_student:true,
    fav_movie:["abc","def","ghi"]
};

const{ fav_movie: fav_m}=js_user;
console.log(fav_m);
/*js_user is an object with several properties.You’re using object destructuring to extract the value of fav_movie into a new variable called fav_m.
The : syntax lets you rename the property while destructuring.*/


// we can get Pi in {} or [] 