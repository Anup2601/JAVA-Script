let todo=[];

let req = prompt("enter your request");

while(true) {
    if (req == "quit") {
        console.log("you left");
        break;
    }
    if (req =="list") {
        console.log("-----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    }
    else if(req =="add"){
        let task=prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req =="delete"){
        let del=prompt("enter the index you want to delete");
        todo.splice(del,1);
        console.log("task romoved");
    }
    else{
        console.log("Invalide input");
    }

    let req=prompt("enter your request");
}