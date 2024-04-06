let arr=[2,2,2,2,2,2,2,2,2,2,2,2,1];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);