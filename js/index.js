var texto = document.getElementById("texto");
var texto_final = document.getElementById("texto_final");
texto_final.readOnly = true;
var original = ['e', 'i', 'a', 'o', 'u'];
var reemplazo = ['enter', 'imes', 'ai', 'ober', 'ufat'];
var toast_texto = document.getElementById("toast_texto");
const my_toast = document.getElementById('toast');

function mostrar_div() {
    var sin_mensaje = document.getElementById("sin_mensaje");
    var mensaje = document.getElementById("mensaje");
    sin_mensaje.style.display = "none";
    mensaje.style.display = "";
    // sin_mensaje.setAttribute("style", "display: none;");
    // mensaje.setAttribute("style", "display: block;");
}

function encriptar() {
    if (texto.value.length == 0 || texto.value.trim() == "") {
        my_toast.classList.remove('text-bg-success');
        my_toast.classList.add('text-bg-danger');
        const toast = new bootstrap.Toast(my_toast);
        toast_texto.innerHTML = "<i class='bi bi-exclamation-octagon' style='font-size: 20px;'></i> &nbsp;&nbsp;Por favor ingrese un texto";
        toast.show()
    } else {
        if (/^[a-z\s]*$/.test(texto.value)) {
            mostrar_div();
            var texto_encriptado = texto.value;
            for (var i = 0; i < original.length; i++) {
                texto_encriptado = texto_encriptado.replace(new RegExp(original[i], 'g'), reemplazo[i]);
            }
            texto_final.innerHTML = texto_encriptado;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Upss...',
                text: 'Solo letras minusculas, sin acentos y sin caracteres especiales',
                // showCancelButton: true,
                // cancelButtonText: 'OK',
                showConfirmButton: false,
                showCloseButton: true,
                allowEnterKey: false,
            });
        }
    }
}

function desencriptar() {
    if (texto.value.length == 0 || texto.value.trim() == "") {
        my_toast.classList.remove('text-bg-success');
        my_toast.classList.add('text-bg-danger');
        const toast = new bootstrap.Toast(my_toast);
        toast_texto.innerHTML = "<i class='bi bi-exclamation-octagon' style='font-size: 20px;'></i> &nbsp;&nbsp;Por favor ingrese un texto";
        toast.show()
    } else {
        if (/^[a-z\s]*$/.test(texto.value)) {
            mostrar_div();
            var texto_desencriptado = texto.value;
            for (var i = 0; i < reemplazo.length; i++) {
                texto_desencriptado = texto_desencriptado.replace(new RegExp(reemplazo[i], 'g'), original[i]);
            }
            texto_final.innerHTML = texto_desencriptado;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Upss...',
                text: 'Solo letras minusculas, sin acentos y sin caracteres especiales',
                // showCancelButton: true,
                // cancelButtonText: 'OK',
                showConfirmButton: false,
                showCloseButton: true,
                allowEnterKey: false,
            });
        }
    }
}

function copiar() {
    var aux = document.createElement("input");
    aux.setAttribute("value", texto_final.innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    Swal.fire({
        icon: 'success',
        text: 'Texto copiado al portapapeles',
        showConfirmButton: false,
        showCloseButton: true,
        allowEnterKey: false,
    });
}