
console.log("*\n**\n***\n****\n*****");

console.log("*****\n   * \n  *  \n *   \n*****");


//Data:-- store(var)-->In Ram memory ,process(x+y,add,remove,delete,),display;

// Data-type:--string,number(int,float),boolean,object

var x =13;
var y = 16;
var sum = x + y;
// console.log(sum);
// xy(product):--


console.log(x*y);
console.log((x*y)/(x+y));

// condtion statment:---
// ------
// ------
// ------
if(x%2 ==0){
    console.log("Even");
}else{
    console.log("Odd");
}
// -------
// -------
// -------
console.log("done");




// check(==,>,<)
var a = 14;
var b = 11;

if(a == b){
    console.log(`${a} is equal to ${b}`);
}else{
    if(a>b){
        console.log(`${a} is Greater than  ${b}`);
        
    }else{
        console.log(`${a} is Smaller than  ${b}`);

    }
}
if(a == b){
    console.log(`${a} is equal to ${b}`);
}else if(a>b){
    
        console.log(`${a} is Greater than  ${b}`);  
}else{
    console.log(`${a} is Smaller than  ${b}`);
}



//  Question1 (Grading System):-------------

var mark = 50;

if(mark >90){
    console.log("excellent boy paisa whasool");
}else if(mark > 80 ){
    console.log("good");
}else if(mark > 70 ){
    console.log("fair");
}else if(mark > 60 ){
    console.log("meets expections thikkk a");
}else{
    console.log("leave the school don't waste your money ,go doing some business 😎");
}

// Loops:----(Repeating Task)

let i = 0//initialization

//evaluation
while(i <= 9){

    console.log(i);

    // Loop ke under kuch likhne pr woh stop hota h.

    // Loop false hone ke baad waps run nahi karta.

    i++;//increment:-nahi toh condition false nahi hogi,or maybe infinite hogi.
}

console.log("Done");

for(let i=1;i<=9;i++){

console.log(i);

}
console.log("Done");


// Take Input from user:---

// var user = prompt("Enter user name");
var user = "sarfraj"
// var userInput = prompt("Enter user value to counting");
var userInput = 10;
 var number = Number(userInput)

 console.log(`Dear ${user}. Here is the counting `);

 for(let i = 1;i<=number;i++){
    console.log(i);
 }
 console.log("end counting");


//  Question2 :-- is-Prime Number(1,self)

// you've to check whether a given number is prime or not;

// Take a number "t" as input repersenting count of input number to be tested;

// take a number "n" as input "t" number of times;

// For each input value of n print "Prime" if the number is prime and not prime otherwise.

// Input Format:--
// Number => t
// t agar 10 ha 10 n ki value leni h
// Number => n
// Number => n(t number of times)


// Output format:--
// 10 output print honge agr t =10
// Prime
// not Prime
// not Prime
// t number of times

// Constaints :-
// 1 <= t <= 10000(itne number de sakta hu)
// 2 <= n <= 10^9(her number 10^9 tak bada hosakta h)
var a = performance.now()
// var numberT = prompt("Total number");
var numberT = 5
var number = Number(numberT);

for(let i=0;i < number; i++){
    // var numberN = prompt("N number");
    var numberN = prompt("N number");
    var  count = 0
    // var num = Math.ceil(Math.sqrt(numberN))
    for(let div=2;div*div <= numberN;div++){
        //ye operation joh h 10^4 * 10^9 =10^13(itni bar run krega) times hue h
        if(numberN % div == 0){
            count++
            break;
        }
    }
    if(count ==0){
        console.log("Prime");
    }else{
        console.log("not Prime");
    }
    
}
var b = performance.now();

console.log((b-a)/1000);

