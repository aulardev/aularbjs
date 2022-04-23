
// funcion para calcular costo total del viaje // 

const Presupuesto = 6000

let entrada = prompt ("Ingrese su nombre");

while (entrada !="ESC") {
    alert ("Nombre registrado:" + entrada);

    entrada = prompt ("Ingrese su apellido");
}

let preciodelseguro = parseFloat(prompt("Ingrese precio del seguro"))
let preciodelpasaje = parseFloat(prompt("Ingrese gasto del pasaje"))
let preciodelhospedaje = parseFloat(prompt("Ingrese gasto del hospedaje"))
let preciodeltransporte = parseFloat(prompt("Ingrese gasto del transporte"))
let operacion = prompt("Ingrese una operacion (+)")
 

if(operacion == "+") {
    console.log(preciodelseguro + preciodelpasaje + preciodelhospedaje + preciodeltransporte)
}


else {
    console.log("operacion no valida")
}



function suma(seguro, pasaje, hospedaje, transporte) {
    return seguro + pasaje + hospedaje + transporte
    }


    

