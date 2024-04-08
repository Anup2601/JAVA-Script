// ---------------question 2--------------
let str="asdfghjklzzzzzzxcvbn";
function getnew(str) {
    let ans="";
    for (let index = 0; index < str.length; index++) {
        let currchar=str[index];
        if(ans.indexOf(currchar)==-1){
            ans+=currchar;
        }
        
    }
    return ans;
}
let a=getnew(str);
console.log(a);

// ---------------question 3------------------
country=["Australia","Germany","UnitedStatesofAmerica"];
function name(country) {
    let max=0;
    for (let index = 0; index < country.length; index++) {
        if (country[max].length<country[index].length) {
            max=index;
        }
    }
    return country[max];
    
}

let b=name(country);
console.log(b);

// -----------------question 4----------------
let str1="aseidfghjkjhegfd";
function vowels(str1) {
    let count=0;
    for (let index = 0; index < str1.length; index++) {
        if(
            str1.charAt(index)=="a"||
            str1.charAt(index)=="e"||
            str1.charAt(index)=="i"||
            str1.charAt(index)=="o"||
            str1.charAt(index)=="u"
        ){
            count=count+1;

        }
        
    }
    console.log(count);
}
vowels(str1);


// -----------------question 5-------------------
let start=100;
let end=200;
function random(start,end){
    let diff=end-start;
    console.log(Math.floor(Math.random()*diff)+start);
}
random(start,end);