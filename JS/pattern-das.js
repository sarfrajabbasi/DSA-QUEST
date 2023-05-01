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
    pattern10 += '⭐\t';

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