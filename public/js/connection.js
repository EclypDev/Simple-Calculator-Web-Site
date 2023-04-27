const ws = new WebSocket('ws://localhost:3000');

const display = document.getElementById('display')

const addNumber = function(value) {
    display.value += value;
}
const removeNumber = function(value) {
    display.value = ""
}
const result = function() {
    display.value = eval(display.value);
}