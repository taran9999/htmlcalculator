const calcControls = document.getElementById('calc-controls');

for(let i = 0; i < 4; i++) {
    let r = document.createElement('div');
    r.classList.add("control-rows");
    for(let j = 0; j < 5; j++) {
        let b = document.createElement('div');
        b.classList.add("control-buttons");
        r.appendChild(b);
    }
    calcControls.appendChild(r);
}

const controlButtons = document.querySelectorAll(".control-buttons");

controlButtons[15].appendChild(document.createTextNode("0"));
controlButtons[16].appendChild(document.createTextNode("."));
controlButtons[17].appendChild(document.createTextNode("="));
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

function operate(op, a, b) {
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