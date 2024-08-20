/*
Las reglas de encriptación son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let textoEncriptar = "";
let textoDesencriptar = "";
let tamannoTexto = 0;
let controlMax = 0
let letraObtenida = "";
let codificacion = "";
let valorCodificado = "";
let valorDecodificado = "";



function encriptarTexto() {

    controlMax = 0;
    textoEncriptar = document.getElementById("textoEntrada").value
    tamannoTexto = textoEncriptar.length;
    valorCodificado = "";

    while (controlMax <= tamannoTexto) {


        letraObtenida = textoEncriptar.substring(controlMax, controlMax + 1);

        switch (letraObtenida) {
            case "a":
                letraObtenida = "ai";
                break;
            case "e":
                letraObtenida = "enter";
                break;
            case "i":
                letraObtenida = "imes";
                break;
            case "o":
                letraObtenida = "ober";
                break;
            case "u":
                letraObtenida = "ufat";
                break;
        }

        valorCodificado = valorCodificado + letraObtenida

        controlMax++;
    }

    asignarTexto('#textoSalida', valorCodificado);
    AnalizaImagen(valorCodificado);
    return;
}

function AnalizaImagen(texto) {
    if (texto === "") {
        mostrarImagen();
    } else {
        ocultarImagen();
    }

}

function desencriptarTexto() {
    controlMax = 0;
    valorDecodificado =
        textoDesencriptar = document.getElementById("textoEntrada").value
    valorDecodificado = textoDesencriptar.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    asignarTexto('#textoSalida', valorDecodificado);
    AnalizaImagen(valorCodificado);
    return;
}

function mostrarImagen() {
    return;
}


function ocultarImagen() {
    return;

}



function asignarTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.value = texto;
    console.log(elemento + texto);
    return;
}

function CreaMensajeSinTexto() {
    console.log("holi");
}

function copiarTexto() {
    // Obtener el input de origen y su valor
    const inputOrigen = document.getElementById('textoSalida');
    const textoACopiar = inputOrigen.value;

    // Usar la API Clipboard para copiar el texto
    navigator.clipboard.writeText(textoACopiar).then(function () {
        console.log('Texto copiado al portapapeles');

        // Leer el texto del portapapeles y pegarlo en el input de destino
        return navigator.clipboard.readText();
    }).then(function (text) {
        asignarTexto('#textoEntrada', text);
        // const inputDestino = document.getElementById('textoEntrada');
        //inputDestino.value = text;
        console.log('Texto pegado en el input de destino');
    }).catch(function (err) {
        console.error('Error al copiar y pegar el texto: ', err);
    });

    return;
}


function validacionesEntrada(input) {
    verificarMayusculas(input);
    verificarLetraConAcento(input);
    return;
}


// Valida Mayusculas
function verificarMayusculas(input) {
    let valor = input.value;
    // Recorremos cada caracter del valor ingresado
    for (let i = 0; i < valor.length; i++) {
        // Verificamos si el caracter actual es una letra mayúscula
        if (valor[i] >= 'A' && valor[i] <= 'Z') {
            // Si se encuentra una letra mayúscula, podemos hacer algo como deshabilitar el input
            input.value = valor.substring(0, i); // Eliminar el texto después de la letra mayúscula
            //input.setAttribute('disabled', true); // Deshabilitar el input
            // Aquí podrías agregar más lógica según tus necesidades
            break; // Terminar el bucle, ya que hemos encontrado una mayúscula
        }
    }

    return;
}
// Valida Acentos

function verificarLetraConAcento(input) {
    let valor = input.value;
    // Recorremos cada caracter del valor ingresado
    for (let i = 0; i < valor.length; i++) {
        // Verificamos si el caracter actual es una letra con acento
        if (esLetraConAcento(valor[i])) {
            // Si se encuentra una letra con acento, podemos hacer algo como deshabilitar el input
            input.value = valor.substring(0, i); // Eliminar el texto después de la letra con acento
            //input.setAttribute('disabled', true); // Deshabilitar el input
            // Aquí podrías agregar más lógica según tus necesidades
            break; // Terminar el bucle, ya que hemos encontrado una letra con acento
        }
    }

    return;
}

function esLetraConAcento(caracter) {
    // Verifica si el caracter es una letra con acento (á, é, í, ó, ú, etc.)
    // Utiliza una expresión regular para detectar cualquier carácter con acento
    return /[\u00E0-\u00FC]/.test(caracter);
    // Rango Unicode para letras acentuadas en el alfabeto latino extendido: \u00E0-\u00FC
}

CreaMensajeSinTexto();