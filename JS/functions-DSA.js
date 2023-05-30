// Functions:---

function fact(val){
    let rv = 1;

    for(let i=1;i<=val;i++){
        rv *=i
    }
    console.log(rv);
    return rv
}

 function display(n,r,npr){
    document.write(`${n}P${r} = ${npr}`)
 }

// let n = Number(prompt('enter n'));
let n = 5;
// let r = Number(prompt('enter r'));
let r = 2;
 let nfact = fact(n);
 let nmrfact = fact(n-r);

 let npr = nfact/nmrfact;
 display(n,r,npr);


//Question 34: Digits frequency:---

let n1 = Number(prompt('enter n'));
let val = Number(prompt('enter val'));

function digitFreq(n,d){

    let count = 0;

    while(n > 0){

        let dig = n % 10

        n=parseInt(n /  10)

        if(dig === d){
            count++

        }

    }

    return count

}

console.log(digitFreq(n1,val));

// Question 35: Number System :---

function numberSystem(){

}