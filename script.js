function greet (name = 'Zainab') {
     return console.log(`Hello ${name}, how are feeling today?`);
}
greet('Luke');
greet();


function addNumbers (num1, num2){
    total = num1 + num2;
    return console.log(`${num1} + ${num2} = ${total}`);
}
addNumbers(13,27);


let x = 10;
console.log('This is value of x', x);
function changeValue (){
    let x = 22;
    console.log('This is the value of x in a function:', x);
}
changeValue();


function outerFunction() { //Creating a Simple Closure
    let count = 0;
    console.log(count);
    function innerFunction() {
        count ++;
        console.log(count);
    }
    return innerFunction;
}
let myClosure = outerFunction(); 
myClosure(); 
myClosure();
myClosure();

function countTill10() {
    let num = 0
    function count (){
        while (num <= 10) {
            console.log('This is number:', num);
            num++;
        }
        console.log('We counted till 10');
    }
    return count;
}

let counting = countTill10();
counting();
