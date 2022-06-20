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