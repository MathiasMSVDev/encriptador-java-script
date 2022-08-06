var texto = document.getElementById("texto");
var texto_final = document.getElementById("texto_final");
texto_final.readOnly = true;
var original = ['e', 'i', 'a', 'o', 'u'];
var reemplazo = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function encriptar() {
    if (/^[a-z\s]*$/.test(texto.value)) {
        var texto_encriptado = texto.value;
        for (var i = 0; i < original.length; i++) {
            texto_encriptado = texto_encriptado.replace(new RegExp(original[i], 'g'), reemplazo[i]);
        }
        texto_final.innerHTML = texto_encriptado;
    } else {
        alert("Solo letras minusculas, sin caracteres especiales");
    }
}

function desencriptar() {
    if (/^[a-z\s]*$/.test(texto.value)) {
        var texto_desencriptado = texto.value;
        for (var i = 0; i < reemplazo.length; i++) {
            texto_desencriptado = texto_desencriptado.replace(new RegExp(reemplazo[i], 'g'), original[i]);
        }
        texto_final.innerHTML = texto_desencriptado;
    } else {
        alert("Solo letras minusculas, sin caracteres especiales");
    }
}

function copiar() {
    texto_final.select();
    document.execCommand("copy");
    alert("Texto copiado");
}