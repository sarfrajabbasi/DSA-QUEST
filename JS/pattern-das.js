// Question 14:--- Pattern

var numP = Number(prompt('Enter pattern number'));

var pattern = "";
// instructor
for(let i=1; i <= numP;i++){

    // inner loop that print acc. to i value and then next line;
    for(let j=1;j<=i;j++){

        pattern += '⭐\t';
    }
    pattern += '\n'
}
console.log(pattern )


// Question 15 :--- pattern 2

let pattern2 ="";

for(let i=numP;1<=i;i--){
    // worker
    for(let j=1;j<=i;j++){
        pattern2 += '⭐\t';
    }
    pattern2 += '\n'
} 
console.log(pattern2)

// Question 16 :--- pattern 3

let pattern3 = ''
let sp = numP-1;
let st = 1;

for(let i=1;i<= numP;i++){
    // workers
    // acc. to sp value it run
    for(let j=1;j<=sp;j++){
        pattern3 += '\t';
    }
    
    // acc. to st value it run
    for(let k = 1;k<=st;k++){
        pattern3 += '⭐\t'
    }
    st++;
    sp--;
    pattern3 += '\n';

}
console.log(pattern3);

// Question 17:- pattern-4 reverse right align-triangle

let sp1 = 0;
let st1 = numP;
let pattern4 = ''
for(let i=numP;1<=i;i--){
    // workers

    for(let j=1;j<=sp1;j++){
        pattern4 += '\t'
    }
    for(let k=1;k<=st1;k++){
        pattern4 += '⭐\t'
    }
    // console.log(sp1,st1);
    pattern4 += '\n'
    st1--
    sp1++
}

console.log(pattern4);

// Question 18:-- pattern 5 diamond

let pattern5 = "";
let sp2 = parseInt(numP/2 ) +1;
let st2 = 1;
for(let i=1;i<=numP;i++){

    for(let j=1;j<=sp2;j++){
        pattern5 += `\t`
    } 
    for(let k=1;k<=st2;k++){
        pattern5 += `⭐\t`
    }
    
    // console.log(sp2,st2);
    if(i <= parseInt(numP/2)){
        sp2--;
        st2 +=2;
    }else{
        sp2++;
        st2 -=2;
    }
    pattern5 += '\n'
}
console.log(pattern5);

// Question -19 pattern hollow diamond

let pattern6 = "";
let sp3 = 1;
let st3 = parseInt(numP/2) + 1;
for(let i=1;i<=numP;i++){
    // worker
    for(let k=1;k<=st3;k++){
        pattern6 += '⭐\t'
    }
    for(let j=1;j<=sp3;j++){
        pattern6 += `${'👽'}\t`
    }
    for(let k=1;k<=st3;k++){
        pattern6 += '⭐\t'
    }
// console.log(st3,sp3,st3);
    if(i <= parseInt(numP/2)){
        st3--;
        sp3 += 2
    }else{
        st3++;
        sp3 -=2;
    }
    pattern6 += '\n'
}
console.log(pattern6);

// Question 20:-- pattern ==> digonal

let pattern7 = "";

for(let i=1;i<=numP;i++){
    for(let j=1;j<=numP;j++){
        if(i===j){
            pattern7 +="🌟\t";
        }
        pattern7 += '🌌\t'
    }
    pattern7 += '\n'
}

console.log(pattern7);

// Question 21 : pattern ==> reverse diagonal

let pattern8 = "";

for(let i=numP ;1<=i;i--){
    // worker
    for(let j=numP;1<=j;j--){
        if( j==i){
            pattern8 += '💣\t'
        }
            pattern8 += '2\t'
      
    }
    pattern8 += "\n"
}

for(let i = 1;i<=numP;i++){
    for(let j=1;j<=numP;j++){
        if(i+j == numP+1){

            pattern8 +="🔥\t"
        }
        pattern8 += '\t'
    }
    pattern8 +="\n"
}
console.log(pattern8);


// Question 22:-- pattern cross x pattern;

let pattern9 = "";

for(let i=1;i<=numP;i++){
    for(let j=1;j<=numP;j++){
        if( i===j || i+j === numP +1){
            
            pattern9 += '⭐ \t'
        }else{

            pattern9 += '🌑\t'
        }
    }
    pattern9 += "\n"
}

console.log(pattern9);

// Question 23  pattern :- hollow outer  diamond

let pattern10 = "";

// outer space
let os = parseInt(numP/2);
// inner space
let is = -1;

for(let i=1;i<=numP;i++){
// console.log(os,is);

for(let j=1;j<=os;j++){
    pattern10 += '🌚\t'
}

pattern10 += '⭐\t';

for(let k=1;k<=is;k++){
    pattern10 += '🌚\t'
}

// first and last row m 1 star ayega
if(i>1 && i <numP ){
    pattern10 += 'c\t';

}
    if(i <= parseInt(numP/2)){
        os--;
        is += 2;
    }else{
        os++;
        is -= 2;
    } 

    pattern10 += '\n'
};

console.log(pattern10);

// Question 24 pattern : number pattern

let pattern11 = "";

let value = 1;
for(let i=1;i<=numP;i++){
    // i ke hisaab se print krta h.
    for(let j=1;j<=i;j++){
        pattern11 += value +"\t"
        value++
    }
    pattern11 += "\n"
}

console.log('%c%s',`color:red`,pattern11);

// Question 25 pattern : Febonacci pattern

let pattern12 = "";
let a =0;
let b =1;

for(let i=1;i<=numP;i++){
    for(let j=1;j<=i;j++){
        pattern12 += `${a}\t`
        let c = a+b;
        a=b;
        b=c;
    }
    pattern12 +="\n"
}

console.log('Febonnaci sequence :----');
console.log(pattern12);

// Question 26 pattern : Permutation combination pattern

let pattern13 = "";
var arr = []
for(let i=0;i<=numP;i++){
    let iCj = 1
    var arr1 = []
    for(let j=0;j<=i;j++){
        arr1.push(iCj)
        pattern13 +=`${iCj}\t`;
        //next value
        let iCjp1= iCj*(i-j)/(j+1)
        iCj = iCjp1;
    }
    arr.push(arr1)
    pattern13 += '\n'

}
console.log('Next permutaion:-----');
console.log(pattern13);

// Question 27 pattern : Print multiplication table up to 10 in format given below

let pattern14 = '';
for(let i=1;i<=10;i++){
    let val = numP * i;
    pattern14 += `${numP} * ${i} = ${val}`
    pattern14 += "\n"
}
console.log('multiplication table :---');
console.log(pattern14);

// Question 28 pattern :diamnond -number pattern

let pattern15 = "";
let sp4 =parseInt(numP/2);
let st4 = 1;
for(let i=1;i<=numP;i++){
    // worker:--
    for(let j=1;j<=sp4;j++){
        pattern15 +='\t'
    }

    for(let k=1;k<=st4;k++){
        pattern15 += '⭐\t'
    }

    if(i <= parseInt(numP/2)){
        sp4--;
        st4+=2;

    }else{
        sp4++;
        st4 -=2
    }
    pattern15 +='\n'
}
console.log(pattern15);

// Question 29 : number pattern(right-angle and left-angle)

let pattern16 = "";
// total space
let sp5 = 2*numP-3;
// star
let st5 = 1
for(let i=1;i<=numP;i++){
    let val =1;
    // for star(left)
    for(let j=1;j<=st5;j++){
        pattern16 +=`${val}\t`
        val++
    }
    // val=6
    // for space
    for(let k=1;k<=sp5;k++){
        pattern16 +=`\t`
    }
    // retduce st5 -1
    if(i === numP){
        st5--
        val--
    }
    // for star(right)
    for(let j=1;j<=st5;j++){

val--

        pattern16 +=`${val}\t`
    }
    // incresase and decrease sp,st
    st5++;
    sp5 -=2
    pattern16 +='\n'
}
console.log(pattern16);

// Question 30 :--- arrow pattern
 
let pattern17=""
let sp6 = parseInt(numP/2);
let st6=1;
// middle m star and left side ma star print hongeP

for(let i=1;i<=numP;i++){
    // space
    for(let j=1;j<=sp6;j++){ 
        if(i === Math.floor(numP/2)+1){
            pattern17 +='*\t'
        }else{

            pattern17 += '\t'
        }
    }  
    
    // star
    for(let k=1;k<=st6;k++){
        pattern17 += '*\t'
    }
    // star print st++,st--
    if(i <= parseInt(numP/2)){
        st6++
    }else{
        st6--
    }
    pattern17 +='\n'
}

console.log(pattern17);

// Question 31:-- 2 pyramid looking to each other one of them is hollow;

 let pattern18 = "";
 let st7 = numP;
 let sp7 = 0;

 for(let i=1;i<=numP;i++){

    // sp7
    for(let j=1;j<=sp7;j++){
        pattern18 +="\t"
    }

    for(let k=1;k<=st7;k++){
        // first row ke baad joh star h unko hatane ke liye
        if(i>1 && i<=parseInt(numP/2) && k>1 && k<st7){

            pattern18+= "\t"
        }else{

            pattern18+= "*\t"
        }
    }

    // sp -+by1 and st-+2
    if(i<=parseInt(numP/2)){
        sp7++;
        st7-=2
    }else{
        sp7--;
        st7+=2
    }
    pattern18+='\n'
 }

 console.log(pattern18);


 