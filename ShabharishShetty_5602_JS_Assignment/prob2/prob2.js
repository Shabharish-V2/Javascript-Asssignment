//Program to check if a user entered number is prime or even or odd number.

const Number = parseInt(prompt(`Enter a number:`));
let primeNo= true;
if (Number=== 1){
    console.log("1 is niether prime nor composite")
} 
else if(Number>1){
    for(let i=2;i<Number;i++) {
        if (Number%i==0){
            primeNo= false;
            break;
        }
    }
    if(primeNo){
        console.log(`${Number} is a prime number`)

    }
    else{
        console.log(`${Number} is not a prime number`)
    }
}
if(Number%2==0){
    console.log("The entered number is even")
}
else{
    console.log("the entered number is odd")
}