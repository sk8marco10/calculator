const n1 = document.querySelector('#uno');
const n2 = document.querySelector('#dos');
const n3 = document.querySelector('#tres');
const n4 = document.querySelector('#cuatro');
const n5 = document.querySelector('#cinco');
const n6 = document.querySelector('#seis');
const n7 = document.querySelector('#siete');
const n8 = document.querySelector('#ocho');
const n9 = document.querySelector('#nueve');
const n0 = document.querySelector('#cero');
let numeros = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];
const clear = document.querySelector('#clear');
const punto = document.querySelector('#punto');
const nsumar = document.querySelector('#sumar');
const nrestar = document.querySelector('#resta');
const nmulti = document.querySelector('#multiplicar');
const ndividir = document.querySelector('#dividir');
const npotencia = document.querySelector('#potencia');
const dcero = document.querySelector('#dcero');
let operacion = [punto, nsumar, nrestar, nmulti, ndividir, npotencia, dcero];
const nigual = document.querySelector('#igual');
const input = document.querySelector('input');
const change = document.querySelector('#changeButton');
const fondo = document.querySelector('#fondo');
input.value = ""

var num1 = 0;
var num2 = 0;
var ope = '';
var valor = 0;

function sumar() {
    var res = parseFloat(num1) + parseFloat(num2);
    valor = res;
}

function restar() {
    var res = parseFloat(num1) - parseFloat(num2);
    valor = res;
}

function multiplicar() {
    var res = parseFloat(num1) * parseFloat(num2);
    valor = res;
}

function dividir() {
    var res = parseFloat(num1) / parseFloat(num2);
    valor = res;
}

function potencia() {
    var res = Math.pow(parseFloat(num1), parseFloat(num2));
    valor = res;
}

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function () {
        if (ope == '') {
            input.value = input.value + numeros[i].value;
            num1 = num1 + numeros[i].value;
        } else {
            input.value = input.value + numeros[i].value;
            num2 = num2 + numeros[i].value;
        }
    });
}

for (let i = 0; i < operacion.length; i++) {
    if (i > 0 && i < operacion.length - 1) {
        operacion[i].addEventListener('click', function () {
            if (ope == '') {
                ope = operacion[i].value;
                input.value = input.value + operacion[i].value;
            }
        });
    }
    else if (i == 0) {
        operacion[i].addEventListener('click', function () {
            if (ope == '') {
                input.value = input.value + operacion[i].value;
                num1 = num1 + operacion[i].value;
                console.log("num1" + num1);
            } else {
                input.value = input.value + operacion[i].value;
                num2 = num2 + operacion[i].value;
                console.log("num2" + num2);
            }
        });
    }
    else {
        operacion[i].addEventListener('click', function () {
            if (num1 != 0 && ope == '') {
                num1 = num1 + '00';
                num1 = parseInt(num1);
                input.value = num1;
            } else if (num2 != 0) {
                num2 = num2 + '00';
                num2 = parseInt(num2);
                input.value = num2;
            }
        });
    }
}

nigual.addEventListener('click', function () {
    switch (ope) {
        case '+':
            sumar();
            break;
        case '-':
            restar();
            break;
        case '*':
            multiplicar();
            break;
        case '/':
            dividir();
            break;

        case '^':
            potencia();
            break;

        default:
            break;
    }
    input.value = valor;
    num1 = valor;
    ope = '';
    num2 = 0;
});

clear.addEventListener('click', function () {
    num1 = 0;
    num2 = 0;
    ope = ''
    valor = 0;
    input.value = '';
});

change.addEventListener('click', function () {
    if (fondo.getAttribute('class') == 'fondo') {
        fondo.setAttribute('class', 'fondo lightF');
        for (let i = 0; i < numeros.length; i++) {
            numeros[i].setAttribute('class', 'boton num lightBN');
        }
        for (let i = 0; i < operacion.length; i++) {
            operacion[i].setAttribute('class', 'boton op lightBO');
        }
        fondo.setAttribute('class', 'fondo lightF');
        input.setAttribute('class', 'input lightIn');
        change.setAttribute('class', 'changeButton lightCh');
        clear.setAttribute('class', 'boton clear lightBC');
        nigual.setAttribute('class', 'boton igual lightBI');
        change.style.right = '35px';
    }
    else {
        fondo.setAttribute('class', 'fondo');
        for (let i = 0; i < numeros.length; i++) {
            numeros[i].setAttribute('class', 'boton num');
        }
        for (let i = 0; i < operacion.length; i++) {
            operacion[i].setAttribute('class', 'boton op');
        }
        input.setAttribute('class', 'input');
        change.setAttribute('class', 'changeButton');
        clear.setAttribute('class', 'boton clear');
        nigual.setAttribute('class', 'boton igual');
        change.style.right = '15px';
    }
});

//CODIGO LARGO
/*console.log("valor 1 = " + num1);
console.log("operacion = " + ope);
console.log("valor 2 = " + num2);*/
/*
n1.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n1.value;
        num1 = num1 + n1.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n1.value;
        num2 = num2 + n1.value;
        console.log("num2" + num2);
    }
});

n2.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n2.value;
        num1 = num1 + n2.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n2.value;
        num2 = num2 + n2.value;
        console.log("num2" + num2);
    }
});
n3.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n3.value;
        num1 = num1 + n3.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n3.value;
        num2 = num2 + n3.value;
        console.log("num2" + num2);
    }
});
n4.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n4.value;
        num1 = num1 + n4.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n4.value;
        num2 = num2 + n4.value;
        console.log("num2" + num2);
    }
});
n5.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n5.value;
        num1 = num1 + n5.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n5.value;
        num2 = num2 + n5.value;
        console.log("num2" + num2);
    }
});
n6.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n6.value;
        num1 = num1 + n6.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n6.value;
        num2 = num2 + n6.value;
        console.log("num2" + num2);
    }
});
n7.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n7.value;
        num1 = num1 + n7.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n7.value;
        num2 = num2 + n7.value;
        console.log("num2" + num2);
    }
});
n8.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n8.value;
        num1 = num1 + n8.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n8.value;
        num2 = num2 + n8.value;
        console.log("num2" + num2);
    }
});
n9.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n9.value;
        num1 = num1 + n9.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n9.value;
        num2 = num2 + n9.value;
        console.log("num2" + num2);
    }
});
n0.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + n0.value;
        num1 = num1 + n0.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + n0.value;
        num2 = num2 + n0.value;
        console.log("num2" + num2);
    }
});
*/

/*
punto.addEventListener('click', function () {
    if (ope == '') {
        input.value = input.value + punto.value;
        num1 = num1 + punto.value;
        console.log("num1" + num1);
    } else {
        input.value = input.value + punto.value;
        num2 = num2 + punto.value;
        console.log("num2" + num2);
    }
});

nsumar.addEventListener('click', function () {
    if (ope == '') {
        ope = nsumar.value;
        input.value = input.value + nsumar.value;
    }
    console.log(ope);
});

nrestar.addEventListener('click', function () {
    if (ope == '') {
        ope = nrestar.value;
        input.value = input.value + nrestar.value;
    }
    console.log(ope);
});

nmulti.addEventListener('click', function () {
    if (ope == '') {
        ope = nmulti.value;
        input.value = input.value + nmulti.value;
    }
    console.log(ope);
});

ndividir.addEventListener('click', function () {
    if (ope == '') {
        ope = ndividir.value;
        input.value = input.value + ndividir.value;
    }
    console.log(ope);
});
*/