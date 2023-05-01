
// console.log("*\n**\n***\n****\n*****");





// console.log("*****\n   * \n  *  \n *   \n*****");


//Data:-- store(var)-->In Ram memory --> process(x+y,add,remove,delete,) --> display;

// Data-type:--string,number(int,float),boolean,object

var x =13;
var y = 16;
var sum = x + y;
// console.log(sum);
// xy(product):--


// console.log(x*y);
// console.log((x*y)/(x+y));

// condtion statment:---
// ------
// ------
// ------
if(x%2 ==0){
    // console.log("Even");
}else{
    // console.log("Odd");
}
// -------
// -------
// -------
// console.log(" smart Work is better then hard work ");




// check(==,>,<)
var a = 14;
var b = 11;

if(a == b){
    // console.log(`${a} is equal to ${b}`);
}else{
    if(a>b){
        // console.log(`${a} is Greater than  ${b}`);
        
    }else{
        // console.log(`${a} is Smaller than  ${b}`);

    }
}
if(a == b){
    // console.log(`${a} is equal to ${b}`);
}else if(a>b){
    
        // console.log(`${a} is Greater than  ${b}`);  
}else{
    // console.log(`${a} is Smaller than  ${b}`);
}



//  Question1 (Grading System):-------------

var mark = 50;

if(mark >90){
    // console.log("excellent boy paisa whasool");
}else if(mark > 80 ){
    // console.log("good");
}else if(mark > 70 ){
    // console.log("fair");
}else if(mark > 60 ){
    // console.log("meets expections thikkk a");
}else{
    // console.log("leave the school don't waste your money ,go doing some business 😎");
}

// Loops:----(Repeating Task)

let i = 0//initialization

//evaluation
while(i <= 9){

    // console.log(i);

    // Loop ke under kuch likhne pr woh stop hota h.

    // Loop false hone ke baad waps run nahi karta.

    i++;//increment:-nahi toh condition false nahi hogi,or maybe infinite hogi.
}

// console.log("Done");

for(let i=1;i<=9;i++){

// console.log(i);

}
// console.log("Done");


// Take Input from user:---

// var user = prompt("Enter user name");
var user = "sarfraj"
// var userInput = prompt("Enter user value to counting");
var userInput = 10;
 var number = Number(userInput)

//  console.log(`Dear ${user}. Here is the counting `);

 for(let i = 1;i<=number;i++){
    // console.log(i);
 }
//  console.log("end counting");


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

// var numberT = Number(prompt("Total number"));
var numberT = 1

// 10^4 tak run krega
for(let i=0;i < numberT; i++){
   
    // var num = Number(prompt("N number"));
    var num = 1
    var  count = 0
    // var num = Math.ceil(Math.sqrt(numberN))
    // 10^9 tak run krega
    for(let div=2;div*div <= num;div++){
        
        if(num % div == 0){
            count++
            break; 
        }
    }
    if(count ==0){
        // console.log("Prime");
    }else{
        // console.log("not Prime");
    }
    
}
var b = performance.now();

// console.log((b-a)/1000);

//Question 3 Print all Prime:-----

// take input lowest and highest and print prime number that btw this range.
// var low = Number(prompt('Enter the lower number'));
var low =1
// var high = Number(prompt('Enter the higher number'))
var high = 1

for(let i=low;i<=high;i++){
    var count = 0;

    // root n
    for(let div=2;div*div<=i;div++){
        if(i%div == 0){
            count++;
            break;
        }
    }
    if(count == 0){
        // console.log(`prime number ${i}`);
    }
}


// Question 4:---

// febonacci Number:-----
// --> you've to print first febonacci number and take as input 'n' the count of febonacci numbers to print and print first 'n' febonacci numbers.
;
// var tNum = Number(prompt('Enter total Number to be Print'));
var tNum = 1;

// initial

var a = 0;
var b = 1;

var arr = []
for(let i=0;i<tNum;i++){
    // print a for first febonacci
    var c = a+b;
    arr.push(a)

    a=b;
    b=c;
}
// console.log(arr);

// Question 5:--- Count Digits of number that user give  and print

// let num2 = Number(prompt('Enter num'));
let num2 = 1000

let digit = 0;
if(num2>=1){
    ++digit
}

while(num2/10 >=1){
    num2 /= 10;
    // console.log(num2);
    digit++
   
}

// console.log(`the Digit of the number is ${digit}`);

//  Question 6:---- Print number of digit

// var num4 = Number(prompt('Number'));
var num4 = 100;
var tp = num4
var numberOfDigit = 0;

while(tp >= 1){
    tp = tp/10;
    numberOfDigit++
}

// make divisior
var div = parseInt(Math.pow(10,numberOfDigit-1));

while(div >=1 ){
    // quetient
    var q = parseInt(num4/div);

    // console.log(q);
    // number reduce to reminder
    num4 = num4%div;
    // reduce divisor
    div = parseInt(div/10)
}

// Question 7:---- Reverse A Number 
// display output in reverse order and line-wise

// var takNum = Number(prompt('Enter the number'));
var takNum = 123456;
while(takNum >0){
    // reminder(last digit)
    var dig = takNum%10;
    // quteint(digit before point)
    takNum = parseInt(takNum/10);
    // console.log(dig);
}

// Question 8:--- inverse of a number

// var input = Number(prompt('inversing number'));
var input = 1000;

var tmp = input;

// inverted number
let inv = 0;
// original position
let op =1;

// run untill the input become 0;
while( input > 0){
    // orginal digit(reminder)
    let od = input % 10;
    // inverted - digit
    let id = op;
    // inverted - position
    let ip = od;
    // make change to inv using ip and id

    inv +=id * parseInt(Math.pow(10,ip-1));

    // reduce the input so next qutoent will come
    input = parseInt(input/10);
    // increase original position
    op++


}

console.log(`inverse of the number ${tmp} is ${inv}`);

//  Question 9  Rotate a number:--
// ---> 

// number that need to rotate
var n = 1234;
// jitne se rotate karna ha
var  k = -1;

// find number of digit

var temp = n;
var nod1 = 0;

while(temp >0){
    temp = parseInt(temp /10);
    nod1++
}
// if number is larger then number of digit,use  modulus for
k = k%nod1;

// for negative number 
if(k < 0){
    k = k + nod1
    // console.log(k);
}


// need divisor and multiply for reminder and quetiont 
var divde = 1;
var multi = 1;
// loop 1 se no. of digit tak chalega
for(let i=1;i<=nod1;i++){

    if(i <= k){
        // jab tak i chota rehta h k se tab tak divisior ma 10 multiply krte rahe
        divde = divde * 10;
    }else{
        // agar k se bada ho toh mutlipay ma multiply kjiye 10 ko
        multi = multi * 10;
     
    }
}
// quotient
var q = parseInt(n / divde);
// reminder
var r =  n % divde;

// reminder multiply by multipler and add quotient
var result = r * multi + q;
console.log(result);

// Question 10:----GCD and LCM

// divisor
// var n1 = Number(prompt('Number 1'))
var n1 = 36;

// divident
// var n2 = Number(prompt('Number 2'))
var n2 = 12;

// if not zero
if(n1 !== 0 && n2 !== 0){
    var on1  = n1;
var on2  = n2;

// loop until n1 % n2 is not equal to 0;

while( n1 % n2 != 0){
    const reminder = n1 % n2;
    // ab reminder divisor banega
    n2 = reminder;//12
    n1 = n2 //24
    // ab disvisor divdient banega
}

const gcd = n2;

// find LCM:---

const lcm = (on1 * on2)/gcd;
console.log(lcm);
console.log(` Here GCD :- ${gcd} and LCM :- ${lcm} of the ${on1} and ${on2}`);

}else{
    console.error('Please enter the valid number');
}

// Question 11:-Prime Factorization

// var number2 = Number(prompt('enter that number '));
var number2 = 1440
var arr = []
// least number se start krenge and up to root n tak hi chalenge

for(let div = 2; div * div <= number2 ; div++){
    // ab us number ko divde krenge div tab tak jab tak woh reminder zero de rah ha
   
    while(number2 % div === 0 ){
        number2 = parseInt(number2/div);
        arr.push(div);
        
    }
    
    if(number2 %div > 1 ){
      arr.push(number2)
    }
   
}
console.log(arr);

// Question 12 :---
// integer
// var a = Number(prompt('input a'));
var a = 3
// var b = Number(prompt('input b'));
var b = 4
// var c = Number(prompt('input c'));
var c = 5

let max = a;

if(b >= max){
    max = b;
}else if(c >= max){
    max = c;
}

if(max === a){
    console.log((b * b + c * c)===( a * a ))
}else if(max === b){
    console.log((a * a + c * c)===( b * b ))
    
}else if(max === c){
    console.log((b * b + a * a)===( c * c ))

}

// Question 13 :-- Benjamin bulbs

var number2 = Number(prompt('number of bulb'));

for(let i=1; i*i<=number2; i++){
    console.log(`bulb that will on next fluctuation is ${i*i}`);
}



