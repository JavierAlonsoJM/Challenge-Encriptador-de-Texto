var entradaTexto = document.querySelector(".entrada-texto");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".txt1");
var seccionTexto2 = document.querySelector(".txt2");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar){
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var conteo = 0;

    for(var posicion = 0; posicion < textoValidar.length; posicion++){
        for(var letra = 0; letra < letras.length;letra++){
            if(textoValidar.charAt(posicion) == letras[letra]){
                conteo++;
            }
        }
    }
    if(conteo == 0){
        return true;
    }
    return false;
}

function encriptar() {
    var texto = entradaTexto.value;
    var salida = "";
    if(!validar(texto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(var posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a"){
            salida = salida + "91";
        }
        else if(texto.charAt(posicion) == "e"){
            salida = salida + "34739";
        }
        else if(texto.charAt(posicion) == "i"){
            salida = salida + "1335";
        }
        else if(texto.charAt(posicion) == "o"){
            salida = salida + "0639";
        }
        else if(texto.charAt(posicion) == "u"){
            salida = salida + "4747";
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function desencriptar() {
    var texto = entradaTexto.value;
    var salida = "";
    if(!validar(texto)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(var posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "9" && texto.charAt(posicion + 1) == "1"){
            salida = salida + "a";
            posicion = posicion + 1;
        }
        else if(texto.charAt(posicion) == "3" && texto.charAt(posicion + 1) == "4" && texto.charAt(posicion + 2) == "7" && texto.charAt(posicion + 3) == "3" && texto.charAt(posicion + 4) == "9"){
            salida = salida + "e";
            posicion = posicion + 4;
        }
        else if(texto.charAt(posicion) == "1" && texto.charAt(posicion + 1) == "3" && texto.charAt(posicion + 2) == "3" && texto.charAt(posicion + 3) == "5"){
            salida = salida + "i";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "0" && texto.charAt(posicion + 1) == "6" && texto.charAt(posicion + 2) == "3" && texto.charAt(posicion + 3) == "9"){
            salida = salida + "o";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "4" && texto.charAt(posicion + 1) == "7" && texto.charAt(posicion + 2) == "4" && texto.charAt(posicion + 3) == "7"){
            salida = salida + "u";
            posicion = posicion + 3;
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar(){
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar(){
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar(){
    var copia =salidaTexto.value;
    navigator.clipboard.writeText(copia);
    
    var anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}