 // ............................................................................................  1nst practical  .......................................................................................
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++DOM function , selectors     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const temp= document.getElementById('title');
   temp.style.backgroundColor="green";
   // extracting content from h1;
    console.log(temp.innerText); //display only content visible content 
    console.log(temp.textContent); // display the hidden values . the values that are hidden from some css property
    console.log(temp.innerHTML);//also display html
    
    // querySelectorAll();
    const temp_list=document.querySelectorAll("ul");
    temp_list.forEach(l => {   // foreach loop;
        l.style.backgroundColor="blue";
    });


    // excessing element by className;
    const temp_list1=document.getElementsByClassName("list-item"); //>> we can not use for each in this coz className return value in HTMLcollection. so we have to convert this using (Array.from(temp_list1))
   const converted_array= Array.from(temp_list1);// converted array;
        converted_array.forEach(elem => {
            elem.style.backgroundColor="orange"
        });




 // ............................................................................................  2nd practical  .......................................................................................
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  parent:child relation , creating new element ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const parent=document.querySelector(".parent");
console.log(parent);
console.log(parent.children);
console.log(parent.children[0].innerHTML);

for (let i =0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
    
}
console.log(parent.firstElementChild);// important for excessing the 1st element of parent 
console.log(parent.lastElementChild);// important for excessing the lst  element of parent 

const node=parent.childNodes;
console.log(node);// as it create a tree like structure so it retrun the value of child + the number of enter you press after declaring the parent class

// creating element using JAVA SCRIPT...........
const div=document.createElement('div');
div.className="main";
div.style.color="orange"
div.style.backgroundColor="green"
div.innerText="hey there ";

document.body.appendChild(div)



// ............................................................................................  3nd practical  .......................................................................................
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ adding , updating , removing  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





// optimized way to add element 
function add_language(lan) {
   const li= document.createElement('li')
  li.appendChild(document.createTextNode(lan))
   document.querySelector(".language").append(li);
   li.className="app_li";
    
}
add_language("python")
add_language("type_script")

// replacing current item to given item.
    const sec_lang=document.querySelector(".language li:nth-child(2)")// important
     const li= document.createElement('li')
    li.textContent="maja"
    sec_lang.replaceWith(li);



// removing content.
const rem_elem=document.querySelector(".language li:last-child")
rem_elem.remove()