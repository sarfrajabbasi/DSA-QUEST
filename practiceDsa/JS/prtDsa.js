
// find prime number
function findPrime(){
    const totalInp = Number(prompt('Enter the  Number of inputs'));

    for(let i=1;i<=totalInp;i++){
        const inp = Number(prompt('enter the input'));
        let count = 0
        // start with 2
        for(let div = 2; div*div<=inp;div++){
            if(inp%div ===0){
                count++
                break
            }
        }
        const prime = (count ===0)?' Prime':'not Prime'
        console.log(prime);
    }
}

// findPrime()
// find prime no. b/w the range

function primeWithRange(low,high){
    const primeArr  =[]
    for(let i=low;i<=high;i++){
        let count = 0;
        for(let div =2;div*div<=i;div++){
            if(i%div === 0){
                count++
            }
        }
        if(count === 0){
            primeArr.push(i)
        }
    }
    console.log(primeArr);
}
// primeWithRange( Number(prompt('low value')), Number(prompt('high value')));

// find febinacci sqeuaence
function febonacciNum(){
    const febSeqRange = Number(prompt('febo num'));
    let a =0,b=1,c,febArr=[];
    for(let i=1;i<=febSeqRange;i++){
        febArr.push(a);
        c = a+b;
        a=b;
        b=c;
    }
    console.log(febArr);

}
// febonacciNum()

// Count Digit no.

function countDigit(input){
    let count = 0;
    while(input !==0){
        input = parseInt(input/10)
        count++
    }
    // console.log(count);
    return count
}
// countDigit(Number(prompt('enter digits ')))

// Print Digit of no.
 function printDigit(input){
    let nod = countDigit(input);//4
    let div = Math.pow(10,nod-1)
    console.log(div);
    // print Number
    while(div !==0){
        const q = parseInt(input/div);
        console.log(q);
        let rem = input % div
        input = rem;
        div = parseInt(div/10)
    }

 }
//  printDigit(Number(prompt('enter digits ')));


// Revrse Digit of no. 

function reverseDigit(input){
    while(input !==0){
        let r = input%10;
        console.log(r);
        input = parseInt(input/10)
    }
}
// reverseDigit(Number(prompt('enter the digit')));

// Inverse of number:--------

function inverseNum(input){
console.log(input);
    let inv = 0;
    let op =1;
     while(input !==0){
        // original digit
        let od =input%10;

        // inverted digit
        let id = op

        // inverted postions
        let ip = od
        inv = inv + id * Math.pow(10,ip-1)
        // console.log(inv);
        input  = parseInt(input/10);
        op++
     }
     console.log(inv);
}
// inverseNum(Number(prompt('e+nter digit')))





function rotateNumber(input,k){
    
}
// rotateNumber(Number(prompt('enter inp')),Number(prompt('enter k value')))
 