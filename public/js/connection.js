const ws = new WebSocket('ws://localhost:3000'); //CONNECT WITH SERVER

const display = document.getElementById('display') //OBTANING DISPLAY ELEMENT BY ID

const addNumber = function(value) { //FUNCTION ADDNUMBER TO DISPLAY
    display.value += value;
}
const removeNumber = function(value) { //FUNCTION REMOVENUMBER TO DISPLAY
    display.value = "0"
}
const result = function() {
    try {
      const equation = display.value;
      const result = eval(equation);
      
      if (Number.isNaN(result) || !Number.isFinite(result)) {
        display.value = "Error";
      } else {
        display.value = result;
      }
    } catch (error) {
      display.value = "Error";
    }
  };