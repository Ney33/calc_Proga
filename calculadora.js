  
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
        }
    }

        
    
    

