// ----------------question 1-------------
const arrayAverage=(array)=>{
    let total=0;
    let average=0;
    for (let number of array) {
         total=total+number;
        }
        average=total/array.length;
    console.log(average);
}
array=[1,2,3,4,5,6];
arrayAverage(array);


// ------------------question 2---------------
const iseven=(num)=>{
    if (num%2==0) {
        console.log("iseven");
    }else{
        console.log("not even");
    }
}
iseven(5);
iseven(2);
iseven(6);
iseven(8);
iseven(12);