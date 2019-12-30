/*
    "" vs '' son lo mismo
     vs ; El punto y coma solo es necesario en casos muy especificos

*/


function getValues() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    suma(num1, num2)
}

function suma(num1, num2) {
    let result = num1 + num2
    let response = `${num1} + ${num2} = ${result}`
    document.getElementById('response').innerHTML = response
}