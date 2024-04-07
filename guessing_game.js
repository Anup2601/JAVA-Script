let guess=prompt("guess the num between 1 to 10");
num=Math.floor(Math.random()*10)+1;
console.log(num);
while (true) {
    if(num==guess){
        console.log("you guess correctly");
        break;
    }
    if (guess=="quit") {
        console.log("you quit !");
        break;
    }
    if (guess!=num) {
        prompt("wrong guess try again");
    }
}