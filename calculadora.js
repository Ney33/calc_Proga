<<<<<<< Updated upstream
  
    //creado estado de error
        let hayerror = false;

        const form = document.forms["calculator"];
        const display = document.querySelector("input[name='resp']");
        const buttons = document.querySelectorAll("input[type='button']");

        buttons.forEach(button => {
         button.addEventListener("click", () => {

            const value = button.value;

            // bloqueo de imput si hay error
            if (hayerror && value !== "ac") {
                return;
            }

            if (value === "=") {
                calcular();
            } 
            else if (value === "ac") {
                limpiar();
            } 
            else {
                display.value += value;
            }
        });
     });
 
    function limpiar() {
        display.value = "";
        hayerror = false;
    }

    function calcular() {
        try {
            let resultado = eval(display.value);

    //correcion de resultado si el numero da infinito se pone en estado d error 
            if (!isFinite(resultado)) {   
                display.value = "error";
                hayerror = true;
                return;
            }

            display.value = resultado;

        } catch (e) {
            display.value = "error";
            hayerror = true;
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
>>>>>>> Stashed changes
        }
    });
});

// ------------------------
// Funciones principales
// ------------------------
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

// ------------------------
// Soporte para teclado
// ------------------------
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Números
    if (!isNaN(key) && key !== " ") {
        agregarValor(key);
    }

<<<<<<< Updated upstream
        
    
    
=======
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

