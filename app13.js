const square=(num)=>(
    num*num
);
let a=square(5);
console.log(a);
// ---------------------question 2------------
let id=setInterval(()=>{
    console.log("apna collage");
},2000);

setTimeout(setInterval=>{
    clearInterval(id);
    console.log("settimeout run");
},10000);