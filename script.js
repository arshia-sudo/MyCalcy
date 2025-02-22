const display = document.getElementById('display');

function addToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    display.textContent = eval(display.textContent);
}

function clearDisplay() {
    display.textContent = '0';
}
