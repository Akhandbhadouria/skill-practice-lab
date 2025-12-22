function cal_prince(...num) {
    return num;
}
console.log(cal_prince(1,2,3,4));


const js_user={
    name:"akhand",
    age:20,
    location: "dhannipur",
    is_student:true,
    fav_movie:["abc","def","ghi"]
};

function obj_passing(js_user) {
    console.log(`hey ${js_user.name} and age is ${js_user.age} and favourite_movies are ${js_user.fav_movie} `);
    
}

obj_passing(js_user);


//+++++++++++++++++++++++++++++ variable storing function  //+++++++++++++++++++++++++++++

const add=function(num){
return num+2;
}
add(4);