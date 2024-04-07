const guess=prompt("guess the num between 1 to 10");
const num=Math.floor(Math.random()*10)+1;
console.log(num);
while(true){
    if(num===guess){
        console.log("you guess correctly");
        break;
    }
    if(guess==="quit") {
        console.log("you quit !");
        break;
    }
    else if(guess<num) {
        prompt("your guess is to small please enter large no.");
    }
    else{
        prompt("your guess is to big please enter small no.")
    }
}