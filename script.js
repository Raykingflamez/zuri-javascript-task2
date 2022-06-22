// Getting the input
num1 = window.prompt("Enter First Number ")

num2 = window.prompt("Enter Second Number ")

operation = window.prompt("choose an operation: \n Addition : ' + ' \n Subtraction: ' - ' \n Multiplication: ' * ' \n Division: ' / ' ")

let a = Number(num1)

let b = Number(num2)


// Calculation functions
function addition(n1,n2){
    return n1 + n2;
}

function multiplication(n1,n2){
    return n1 * n2;
}

function division(n1,n2){
    return n1 / n2;
}

function subtraction(n1,n2){
    return n1 - n2;
}

// Conditionals
if (operation == '-'){
    alert(subtraction(a,b));
}else if (operation == '+'){
    alert(addition(a,b));
}else if (operation == '*'){
    alert(multiplication(a,b));
}else if (operation == '/'){
    alert(division(a,b));
}else{
    alert("try again")
}