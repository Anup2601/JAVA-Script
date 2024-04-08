// ----------------question 1----------------
array=[1,2,3,4,5,6,7,8,9,];
let ans=array.every((el)=>(el%10==0));
console.log(ans);


// --------------------------question 2-------------------
let array2=[2,3,4,5,6,7,8,9];
let result=array2.reduce((min,el)=>{
    if(el<min){
        console.log(el);
    }
    else{
        console.log(min);
    }
})