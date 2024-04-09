let in1=document.querySelector("#text");
let para1=document.querySelector("p");

in1.addEventListener("input",function(){
    console.log(in1.value);
    para1.innerText=in1.value; 
});