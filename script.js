function insert(number) {
document.form.result.value = document.form.result.value + number;
}

function equal() {
var expression = document.form.result.value;
if(expression) {
document.form.result.value = eval(expression);
}
}

function backspace() {
var expression = document.form.result.value;
document.form.result.value = expression.substring(0, expression.length - 1);
}

function clean() {
document.form.result.value = '';
}