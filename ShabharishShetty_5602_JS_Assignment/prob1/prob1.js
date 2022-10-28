//Program to sort an array of all prime numbers between 1 and user given number value
const lowerNumber = 1
const higherNumber = parseInt(prompt(`Enter a number:`));
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are: `);
for(let i = lowerNumber; i<= higherNumber; i++) {
    let flag=0;
    for(let j = 2; j<i;j++){
        if ( i%j==0){
            flag = 1;
            break;
        }
    }
    if(i>1 && flag== 0){
        console.log(i);
    }
}
