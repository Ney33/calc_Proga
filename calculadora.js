
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

