// funcion completa

let TIPO = document.querySelector(".TIPO")
let SIMPLE = document.querySelector(".SIMPLE")
let DOBLE = document.querySelector(".DOBLE")
let TRIPLE = document.querySelector(".TRIPLE")

let funcion = function(){
    TIPO.value = this.value
}

SIMPLE.onclick = funcion
DOBLE.onclick = funcion
TRIPLE.onclick = funcion

let METODO = document.querySelector(".METODO")
let TARJETA = document.querySelector(".TARJETA")
let EFECTIVO = document.querySelector(".EFECTIVO")

let funcion1 = function(){
    METODO.value = this.value
}

TARJETA.onclick = funcion1
EFECTIVO.onclick = funcion1

function enviardatos(){
    let tipo = document.querySelector(".TIPO").value
    let metodo = document.querySelector(".METODO").value
    let cantidad = document.querySelector(".CANTIDAD").value

    if(tipo == "SIMPLE" && metodo == "EFECTIVO"){
        let precio = cantidad * 20.00
        document.querySelector(".TOTAL").value = precio
    }else if (tipo =="SIMPLE" && metodo == "TARJETA"){
        let precio = cantidad * 20.00
        let porcentaje = precio * 5 / 100 + precio
        document.querySelector(".TOTAL").value = porcentaje
    }else if(tipo == "DOBLE" && metodo == "EFECTIVO"){
        let precio = cantidad * 25.00
        document.querySelector(".TOTAL").value = precio
    }else if (tipo =="DOBLE" && metodo == "TARJETA"){
        let precio = cantidad * 25.00
        let porcentaje = precio * 5 / 100 + precio
        document.querySelector(".TOTAL").value = porcentaje
    }else if(tipo == "TRIPLE" && metodo == "EFECTIVO"){
        let precio = cantidad * 28.00
        document.querySelector(".TOTAL").value = precio
    }else if (tipo =="TRIPLE" && metodo == "TARJETA"){
        let precio = cantidad * 28.00
        let porcentaje = precio * 5 / 100 + precio
        document.querySelector(".TOTAL").value = porcentaje
    }
}
