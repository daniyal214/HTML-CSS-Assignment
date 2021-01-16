//Assignment1
console.log('Hello there');
//Assignment2
var a = 2;
var b = a++ + ++a - --a + a--  ;
console.log(a)
console.log(b);

//Assignment3 - Calculator
var x = prompt('Enter first number');
var y = prompt('Enter Second number');
var num1 = parseInt(x);
var num2 = parseInt(y);
var op = prompt('Enter Operation');
if (op == '+') {
    alert(`Sum is ${num1+num2}`)
};
if (op == '-') {
    alert(`Difference is ${num1-num2}`)
};
if (op == '*') {
    alert(`Product is ${num1*num2}`)
};
if (op == '/') {
    alert(`Quotient is ${num1/num2}`)
};
if (op == '%') {
    alert(`Quotient is ${num1%num2}`)
};

////Assignment3 - Percentage Calculator
