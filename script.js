// Declare the Variable 
const result = document.getElementById('result');

function display(num){
    result.value += num;
}

function clearDisplay() {
    result.value = '';
}
function clearLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    // Check if the expression in the result field is valid
    if (isValidExpression(result.value)) {
        // If valid, evaluate the expression and set the result field to the result
        result.value = eval(result.value);
    } else {
        // If not valid, show an alert
        alert('Invalid expression');
    }
}


function isValidExpression(expression) {
 
    return true; // Placeholder, replace with your validation logic
}

// 

