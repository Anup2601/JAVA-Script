let num=500;
if (num%10==0) {
    console.log("Good");
}
else{
    console.log("Bad");
}

// question 2
let age=prompt("enter your age");
let name=prompt("enter your mane");
alert(`${name} is ${age} year old`);

// question 3
let Quarter=3;
switch(Quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April, May June,");
        break;
    case 3:
        console.log("July, August,September");
        break;
    case 4:
        console.log("Octuber, November, December");
        break;
    default:
        console.log("Invalid input !");
}

// question 4

let str="apple";
if ((str=="A")||(str=="a")&&(str.length>5)){
    console.log("Good string");
    
}
else{
    console.log("Not good");
}

// question 5
let num1=3;
let num2=5;
let num3=7;
if(num1==num2==num3){
    console.log('all are equal');
}
else if((num1>num2)&&(num1>num3)){
    console.log(`${num1} is greater`);
}
else if((num1<num2)&&(num3<num2)){
    console.log(`${num2} is greater`);
}
else{
    console.log(`${num3} is greater`);
}