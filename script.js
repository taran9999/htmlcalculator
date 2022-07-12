const calcControls = document.getElementById('calc-controls');
const calcDisplay = document.getElementById('calc-display');
let op1 = "";
let op = "";
let op2 = "";
let displayUpdated = false;
let updateDisplayRequest = false;

calcDisplay.appendChild(document.createTextNode(""));

for(let i = 0; i < 4; i++) {
    let r = document.createElement('div');
    r.classList.add("control-rows");
    for(let j = 0; j < 5; j++) {
        let b = document.createElement('div');
        b.classList.add("control-buttons");
        b.onclick = () => {
            if(b.textContent) updateDisplay(b.textContent);
        }
        r.appendChild(b);
    }
    calcControls.appendChild(r);
}

const controlButtons = document.querySelectorAll(".control-buttons");

controlButtons[15].appendChild(document.createTextNode("0"));
controlButtons[16].appendChild(document.createTextNode("."));
controlButtons[17].appendChild(document.createTextNode("="));
controlButtons[18].appendChild(document.createTextNode("C"));
controlButtons[10].appendChild(document.createTextNode("1"));
controlButtons[11].appendChild(document.createTextNode("2"));
controlButtons[12].appendChild(document.createTextNode("3"));
controlButtons[13].appendChild(document.createTextNode("+"));
controlButtons[14].appendChild(document.createTextNode("-"));
controlButtons[5].appendChild(document.createTextNode("4"));
controlButtons[6].appendChild(document.createTextNode("5"));
controlButtons[7].appendChild(document.createTextNode("6"));
controlButtons[8].appendChild(document.createTextNode("*"));
controlButtons[9].appendChild(document.createTextNode("/"));
controlButtons[0].appendChild(document.createTextNode("7"));
controlButtons[1].appendChild(document.createTextNode("8"));
controlButtons[2].appendChild(document.createTextNode("9"));

function operate(op, x, y) {
    let a = parseFloat(x);
    let b = parseFloat(y);
    switch(op) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;
    }
}

function updateDisplay(s) {
    if(s == "C") {
        calcDisplay.textContent = "";
        op1 = "";
        op = "";
        op2 = "";
    } else if(s == "+" || s == "-" || s == "*" || s == "/") {
        if(calcDisplay.textContent != "") {
            if(op1 == "") {
                op1 = calcDisplay.textContent;
                console.log(`op1 = ${calcDisplay.textContent}`);
                op = s;
                console.log(`op = ${s}`);
                updateDisplayRequest = true;
                console.log("updateDisplayRequest = true");
                displayUpdated = false;
                console.log("displayUpdated = false");
            } else if(displayUpdated && op != "") {
                op2 = calcDisplay.textContent;
                console.log(`op2 = ${calcDisplay.textContent}`);
                calcDisplay.textContent = "" + operate(op, op1, op2)
                console.log(`calculation: ${op1} ${op} ${op2}`);
                op1 = calcDisplay.textContent;
                console.log(`op1 = ${calcDisplay.textContent}`);
                op2 = "";
                console.log("op2 = ");
                updateDisplayRequest = true;
                console.log("updateDisplayRequest = true");
            }
        }
        op = s;
        console.log(`op = ${s}`);
    } else if(s == "=") {
        if(op1 != "" && op != "" && displayUpdated) {
            op2 = calcDisplay.textContent;
            console.log(`op2 = ${calcDisplay.textContent}`);
            calcDisplay.textContent = "" + operate(op, op1, op2)
            console.log(`calculation: ${op1} ${op} ${op2}`);
            op1 = calcDisplay.textContent;
            console.log(`op1 = ${calcDisplay.textContent}`);
            op2 = "";
            console.log("op2 = ");
            op = "";
            console.log("op = ");
            updateDisplayRequest = true;
            console.log("updateDisplayRequest = true");
        }
    } else {
        if(updateDisplayRequest) {
            calcDisplay.textContent = "";
            updateDisplayRequest = false;
            console.log("updateDisplayRequest = false");
            displayUpdated = true;
            console.log("displayUpdated = true");
        }
        calcDisplay.textContent += s;
    }
    console.log(`op1: ${op1}, op: ${op}, op2: ${op2}, display: ${calcDisplay.textContent}`);
}