// ---------------question 1-----------------
let array=[1,2,3,4,5];
let sqr=array.map((num)=>num*num);
    console.log(sqr);
let sum=sqr.reduce((sqr,el)=>sqr+el,0);
console.log(sum);
let avg=sum/array.length;
console.log(avg);

// ---------------question 2--------------------
let plus=array.map((num)=>num+5);
console.log(plus);

// ------------------question 3-------------------
let array1=["a","d","e","u"];
let upper=array1.map((str)=>str.toUpperCase());
console.log(upper);

// --------------------question 4--------------------

const doubleAndReturnArgs=(array,...args)=>[
    ...array,
    ...args.map((v)=>v*2),
];
let a=doubleAndReturnArgs([1,2,3,],4,5,6,8);
console.log(a);
let b=doubleAndReturnArgs([1,2,3,],4,1,2,8);
console.log(b);



// ---------------------question 5--------------------
const mergeobject=(obj1,obj2)=>[{...obj1,...obj2}];
console.log(mergeobject({a:1,b:3},{c:0,d:8}));
