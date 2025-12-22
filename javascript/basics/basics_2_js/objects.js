// /*An object is a collection of properties, where each property is a key (also called a property name) mapped to a value*/ 

// // creaitng by using object literals.
// const js_user={
//     name:"akhand",
//     age:20,
//     location: "dhannipur",
//     is_student:true,
//     fav_movie:["abc","def","ghi"]
// };

// js_user.name="aman";
// console.log(js_user.name);

// // Object.freeze(js_user); // after freezing we cznnot change the value of object.

// js_user.name="babu bhai";

// console.log(js_user);


// // **********************U********  function using object  ********************************************

// js_user.greeting=function(){
//     console.log("hey akhand");
    
// }
// js_user.greeting2=function(){
//     console.log(`hey mmy name is ${this.name}.`);  //iMPORTANT..
    
// }
// console.log(js_user.greeting());
// console.log(js_user.greeting2());


// /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// // declaring object by using constructor;
// const obj=new Object();
// obj.name="akhand";
// obj.age=20;
// obj.is_student=false;

//  console.log(
//     obj
// );


// // ********************************************..important..********************************************

// const new_obj={
//     name2:"bablu blast",
//     age:100,
//     first_name:{
//         mothers:{
//             name_m:"ram vati",
//             name_father:"g_laal_triphati"
//         }
//     }
// };

// const real_obj=new Object();
// real_obj.info=new_obj;

// console.log(real_obj);
// console.log();

// console.log(real_obj.info.name);console.log();

// console.log(real_obj.info.first_name);console.log();

// console.log(real_obj.info.first_name.mothers);console.log();

// console.log(real_obj.info.first_name.mothers.name_father);console.log();


// // ********************************************..merging 2 object..********************************************

// const res_obj= Object.assign({},new_obj,js_user)  // if there are same variable then it overwrite the value from the lst declared object .............
// console.log(res_obj);

// const res_obj1={...new_obj,...js_user};
// console.log(res_obj1);


// // ********************************************.. excessing keys and values..********************************************

// console.log(Object.keys(new_obj));
// console.log(Object.values(new_obj));
