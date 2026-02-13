<<<<<<< Updated upstream

    const form = document.forms["calculator"];
    const display = form["resp"];
    const buttons = form.querySelectorAll("input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "=") {
                calcular();
            } else if (value === "ac") {
                limpiar();
            } else {
                agregarValor(value);
            }
        });
    });

    function agregarValor(valor) {
        display.value += valor;
    }

    function limpiar() {
        display.value = "";
    }

    function calcular() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

=======
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
            calcular();
        } 
        else if (value === "ac") {
            limpiar();
        } 
        else {
            agregarValor(value);
        }
    });
});

// ------------------------
// Funciones principales
// ------------------------
function agregarValor(valor) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += valor;
}


function limpiar() {
    display.value = "";
}

function calcular() {
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
        const resultado = eval(expresion);

        // 4️⃣ Si resultado es undefined o infinito
        if (resultado === undefined || !isFinite(resultado)) {
            display.value = "Error";
        } else {
            display.value = resultado;
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
        agregarValor(key);
    }

    // Operadores
    else if (["+", "-", "*", "/"].includes(key)) {
        agregarValor(key);
    }

    // Enter = calcular
    else if (key === "Enter") {
        event.preventDefault();
        calcular();
    }

    // Backspace = borrar último carácter
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = limpiar
    else if (key === "Escape") {
        limpiar();
    }

    window.onload = () => {
    display.focus();
};
});

>>>>>>> Stashed changes
