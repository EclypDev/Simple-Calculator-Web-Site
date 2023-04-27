const ws = new WebSocket('ws://localhost:3000'); //CONNECT WITH SERVER

const display = document.getElementById('display') //OBTANING DISPLAY ELEMENT BY ID

const addNumber = function(value) { //FUNCTION ADDNUMBER TO DISPLAY
    display.value += value;
}
const removeNumber = function(value) { //FUNCTION REMOVENUMBER TO DISPLAY
    display.value = ""
}
const result = function() { //FUNCTION TO GIVE RESULT TO DISPLAY
    display.value = eval(display.value);
}
