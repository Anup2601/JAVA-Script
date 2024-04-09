// ---------------------question 1-------------------
let btn=document.createElement("button");
let input1=document.createElement("input");
btn.innerText="click me!";
document.querySelector("body").append(btn);
document.querySelector("body").append(input1);

// ------------------------------qustion 2----------------------

btn.setAttribute("id","btn");
input1.setAttribute("placeholder","username");

// --------------------------question 3-------------------------

let btn1=document.querySelector("#btn");
btn1.classList.add("btn");

// ----------------------question 4--------------------------------

let h=document.createElement("h1");
h.innerHTML="<u> DOM practice </u>";
document.querySelector("body").append(h);
h.classList.add("heading");

// ---------------------------question 5------------------------

let para1=document.createElement("p");
para1.innerHTML="welcome to apnacollage <b>delta</b> practice "
document.querySelector("body").append(para1);