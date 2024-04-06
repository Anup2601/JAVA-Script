let a=['january','july','march','august'];
a.shift();
console.log(a);
a.shift();
console.log(a);
a.unshift("june");
a.unshift("july");
console.log(a);


// question 2
let array1=["january","julay","march","august"];
array1.splice(0,2,"june","july");
console.log(array1);

// question 3
let array2=["c","c++","html","javascript","python","java","c#","sql"];
array2.reverse();
console.log(array2);
console.log(array2.indexOf("javascript"));