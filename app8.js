let n=prompt("enter the index upto which you want to print");
arr=["a","b","c","d","e","f"];
console.log(arr.slice(0,n));
console.log(arr);


// ---------------question 2-----------------
console.log(arr.slice(-n));


// ---------------question 3-----------------
let str=prompt("enter the string");
if(str.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
    
}

// ---------------question 4-----------------
indx=3;
if(str[indx]==str[indx].toLowerCase()){
    console.log("string is lowercase");
}
else{
    console.log("string is uppercase");
}

// ---------------question 5-----------------
console.log(`the original string is:- ${str}`);
console.log(`the string after trimmed:- ${str.trim()}`);

// ---------------question 6-----------------
arr1=prompt("enter the element in array");
if(arr1.length==0){
    console.log("the array is empty");
}
else{
    console.log("the array is not empty");

}