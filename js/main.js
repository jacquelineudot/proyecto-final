let edad = prompt("Que edad tenes?")

let pregunta = function () {
    if (edad >= 18) {
        alert("Podes entrar!")
    } else {
        alert("Entra bajo tu responsabilidad")
    }
}

pregunta()

let boton = document.getElementById("boton")

let pupop = function () {
    alert("Estas saliendo de nuestro sitio")
}

boton.addEventListener("click", function () { pupop() })


pregunta()