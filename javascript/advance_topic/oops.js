
// const user={
//     name:"akhand",
//     fxn: function() {
//         const c_name="aman";
//         console.log(`this is parents name ${this.name}`);  
//         console.log(this);  //(this )--> it store the current context value -> store the datta of object 
        
//     }
// }

// console.log(user.fxn());


// --------------------------------------------------------------------constructor ..new ...--------------------------------------------------------------------

function parents(name,age,loggedin) {
    this.name=name;
    this.age=age;
    this.loggedin=loggedin
    
}

parent_one= new parents("akhand",21,true);
parent_two= new parents("aman",10,false); // if we do not use new to define parent_two then it will overwrite the value of the function so use new for  creating new instance for each calll
console.log(parent_one);
console.log(parent_two);
