/*
    "" vs '' son lo mismo
     vs ; El punto y coma solo es necesario en casos muy especificos

*/


function getValues(indicator) {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)

    if(indicator === 's') {
        suma(num1, num2)
    }
    if(indicator === 'm') {
        multiplicacion(num1, num2)
    }
}

function suma(num1, num2) {
    let result = num1 + num2
    let response = `SUMA ${num1} + ${num2} = ${result}`
    document.getElementById('response').innerHTML = response
}

function multiplicacion(num1, num2) {
    let result = num1 * num2
    let response = `MULTIPLICACIÓN ${num1} * ${num2} = ${result}`
    document.getElementById('response').innerHTML = response
}