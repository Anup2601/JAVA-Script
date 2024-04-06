// -------------------question 1----------------

let arr=[2,2,2,2,2,2,2,2,2,2,2,2,1];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

console.log(arr);


// -------------------question 2&3----------------
let num1 = 12345678;
let count=0;
let copy=num1;
let sum=0;
while(copy>0){
    count++;
    digite=copy%10;
    sum=sum+digite;
    copy=Math.floor(copy/10);
}
console.log(count);
console.log(sum);


// -------------------question 4----------------
num=5;
let fac=1;
for(let i=1;i<=5;i++){
    fac=fac*i;
}
console.log(fac);

// ----------------question 5-----------------
arr=[2,5,8,4,9,7];
lar=0;
for(let i=1;i<=arr.length;i++){
    if(lar<arr[i]){
        lar=arr[i];
    }
}
console.log(lar);