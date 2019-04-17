let input = document.querySelector('.input');

let buttons = document.querySelectorAll('.numKey');

let newCalculation = false;

document.addEventListener('keyup', function (event) {
    buttons.forEach(element => {
        element.blur();
    });
    if (event.keyCode >= 96 && event.keyCode <= 105) {
        if (input.innerText === '0') {
            input.innerText = event.key;
        } else {
            input.innerText += event.key;
        }
    } else if (event.keyCode >= 106 && event.keyCode <= 107 || event.keyCode === 109 || event.keyCode === 111) {
        if (!isNaN(input.innerText.slice(-1))) {
            input.innerHTML += event.key;
        } else {
            input.innerHTML = input.innerText.slice(0, -1);
            input.innerHTML += event.key;
        }
    } else if (event.keyCode === 13) {
        if (input.innerText && !isNaN(input.innerText.slice(-1))) {
            input.innerHTML = eval(input.innerHTML);
        }
    } else if (event.keyCode === 8) {
        if (input.innerText.length > 1) {
            input.innerText = input.innerText.slice(0, -1);
        } else {
            input.innerText = '0';
        }
    }
});

buttons.forEach(node => {
    node.addEventListener('click', function (event) {
        switch (this.id) {
            case 'add':
                if (!isNaN(input.innerText.slice(-1))) {
                    input.innerHTML += '+';
                } else {
                    input.innerHTML = input.innerText.slice(0, -1);
                    input.innerHTML += '+';
                }
                break;
            case 'subtract':
                if (!isNaN(input.innerText.slice(-1))) {
                    input.innerHTML += '-';
                } else {
                    input.innerHTML = input.innerText.slice(0, -1);
                    input.innerHTML += '-';
                }
                break;
            case 'multiply':
                if (!isNaN(input.innerText.slice(-1))) {
                    input.innerHTML += '*';
                } else {
                    input.innerHTML = input.innerText.slice(0, -1);
                    input.innerHTML += '*';
                }
                break;
            case 'divide':
                if (!isNaN(input.innerText.slice(-1))) {
                    input.innerHTML += '/';
                } else {
                    input.innerHTML = input.innerText.slice(0, -1);
                    input.innerHTML += '/';
                }
                break;
            case 'enter':
                if (input.innerText && !isNaN(input.innerText.slice(-1))) {
                    input.innerHTML = eval(input.innerHTML);
                }
                break;
            case 'clear':
                input.innerText = '0';
                break;
            case 'correct':
                if (input.innerText.length > 1) {
                    input.innerText = input.innerText.slice(0, -1);
                } else {
                    input.innerText = '0';
                }
                break;
            default:
                if (input.innerText === '0') {
                    input.innerText = this.id;
                } else {
                    input.innerText += this.id;
                }
                break;
        }
    })
});
