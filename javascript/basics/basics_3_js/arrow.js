const data={
    name:"akhand",

    age : 20,
     greeting: function(num){
        console.log(`${num} welcome ${this.name} your age is ${this.age}`);
        console.log(this); // this tells us the current context ..  
        
     }
}

console.log(data.greeting(1 ));

//+++++++++++++++++++++++++++++ arrow function  //+++++++++++++++++++++++++++++

const add=(num1,num2)=> {
    return num1+num2;
}
console.log(add(2,3));


//implesit way.........
const add2=(num1,num2)=>(num1+num2); // we dont have to write  return if we perform operation inside ();

console.log(add2(2,3));
 
