let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let li1=document.createElement("li");
    li1.innerText=input.value;

    
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete")
    
    li1.appendChild(del);
    ul.appendChild(li1);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
});