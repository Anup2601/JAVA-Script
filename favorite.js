const movie="aashiqui2";
let guess=prompt("guess my favorite movie");
while ((guess!=movie)&&(guess!="quit")) {
    guess=prompt(" wrong guess. please try again");
}
if (movie==guess) {
    console.log("congrats ! ");
}
else{
    console.log("you quit")
}
