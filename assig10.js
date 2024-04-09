// -----------------question 1-----------------
let btn=document.querySelector("button");
function activity(){
    console.log("you scroll on mouse");
}
btn.addEventListener("mouseout",activity);

// --------------------question 2------------------
let btn1=document.createElement("button");
btn1.innerText="press me";
document.querySelector("body").append(btn1);
btn1.addEventListener("click",function(){
    console.dir(this.innerText);
    this.style.backgroundColor="red";
});

// --------------question 3---------------------
let h2=document.createElement("h2");
let input=document.createElement("input");
input.placeholder="enter your name";
document.querySelector("body").append(h2);
document.querySelector("body").append(input);
input.addEventListener("input",function(){
    console.log(input.value);
    h2.innerText=input.value;
})