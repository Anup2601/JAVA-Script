let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let input=document.querySelector("input").value;
    let collarr=await getcollage(input);
    show(collarr);
});


function show(collarr) {
    let list=document.querySelector("#result");
    for(col of collarr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcollage(input) {
    try {
        let res=await axios.get(url+input);
        return res.data;
    } catch (error) {
        console.log("error:-",error);
        return [];
    }
}