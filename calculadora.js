const form = document.forms["calculator"];
const display = form["resp"];
const buttons = form.querySelectorAll("input[type='button']");

// ------------------------
// Click en botones
// ------------------------
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            calculate();
        } 
        else if (value === "ac") {
            clean();
        } 
        else {
            addValue(value);
        }
    });
});

// ------------------------
// Funciones principales
// ------------------------
function addValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}


function clean() {
    display.value = "";
}

function calculate() {
    const expresion = display.value;

    // 1️⃣ Si está vacío → no hacer nada
    if (!expresion) return;

    // 2️⃣ Si termina en operador → mostrar error
    if (/[+\-*/]$/.test(expresion)) {
        display.value = "Error";
        return;
    }

    // 3️⃣ Si ya dice Error → no hacer nada
    if (expresion === "Error") return;

    try {
        const result = eval(expresion);

        // 4️⃣ Si resultado es undefined o infinito
        if (result === undefined || !isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}


// ------------------------
// Soporte para teclado
// ------------------------
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Números
    if (!isNaN(key) && key !== " ") {
        addValue(key);
    }

    // Operadores
    else if (["+", "-", "*", "/"].includes(key)) {
        addValue(key);
    }

    // Enter = calcular
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = borrar último carácter
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = limpiar
    else if (key === "Escape") {
        clean();
    }

    window.onload = () => {
    display.focus();
};
});