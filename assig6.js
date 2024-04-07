// ---------------question 1 ---------------------
let array1=[2,3,4,5,67,7,8,9,0,1];
let num1=3;

function large(array,num){
    for (let index = 0; index < array.length; index++) {
        if (array[index]>num) {
            console.log=(array[index]);
        }
        
    }
}
large(array1,num1);
large( [1,2,3,4,5,6,7,8],5);
large( [1,2,3,4,5,6,7,8],4);
large( [1,2,3,4,5,6,7,8],7);
large( [1,2,3,4,5,6,7,8],3);

 
 