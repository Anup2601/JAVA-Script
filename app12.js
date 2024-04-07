function sum(n){
    let sum1=0;
    for(let i=1;i<=n;i++){
         sum1=sum1+i;
        }
    return sum1;
}

let a=sum(5);
console.log(a);
let b=sum(6);
console.log(b);
let c=sum(2);
console.log(c);
let d=sum(4);
console.log(d);
let e=sum(50);
console.log(e);

let str=["apple","pie","!",'saal'];
function concatenation(str) {
    let result='';
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
}
let z=concatenation( str);

console.log(z);