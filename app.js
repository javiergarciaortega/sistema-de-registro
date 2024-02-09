let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
console.log(numeroSecreto)    
//let palabraVeces = "vez";
let maximoIntentos = 5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos la condición hecho en forma común  template strings // operador ternario hace comparación; de variables "vez" : "veces"
        alert(`Acertaste el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos +1;
        //intentos +=1;
        intentos++;

        palabraVeces = "Veces";
        if (intentos > 4) {
            //usar template strings
            alert (`Llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        } 
    }
         
    }
