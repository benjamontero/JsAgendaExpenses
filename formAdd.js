let botones = document.getElementsByClassName('botonAdd');
let selectGas = document.getElementById('selectGas');
let selectIng = document.getElementById('selectIng');
let fecha = new Date().toLocaleDateString();
let montoMovimiento = document.getElementById('monto');
let botonCargar = document.getElementById('cargarMovimiento');
let movimiento;

agregarMovimiento();



function agregarMovimiento() {
    botonCargar.addEventListener('click', () => {



    })


}
//ACCION DE BOTON INGRESO/GASTO
function seleccionIngresoGasto(valorIngresoGasto) {

    for (const boton of botones) {

        boton.addEventListener('click', () => {
            //BORRA TODOS LOS ACTIVE
            for (const otroBoton of botones) {
                otroBoton.classList.remove('active');
            }
            if (boton.id === "buttonIng") {
                console.log('click en ingreso')
                selectIng.disabled = false;
                selectGas.disabled = true;

            } else {
                console.log('click en gasto')
                selectGas.disabled = false;
                selectIng.disabled = true;

            }
            boton.classList.add('active');


        });



    }
}

function seleccionMovimiento() {
    let elegirOpcion = '';
    selectIng.addEventListener('change', () => {
        elegirOpcion = selectIng.value;
        console.log(elegirOpcion);
    });
    selectGas.addEventListener('change', () => {
        elegirOpcion = selectGas.value;
        console.log('elegiste un gasto con el motivo', elegirOpcion);
    });

}





//     switch (elegirOpcion) {
//         case 1:
//             if (elegirOpcion === 1) {
//                 elegirOpcion = "Sueldo";
//             }
//             else if (elegirOpcion === 2) {
//                 elegirOpcion = "Aguinaldo";
//             }
//             else {
//                 elegirOpcion = "Extra";
//             }

//             let ingreso = parseInt(prompt("Monto del ingreso:"));
//             // formara el array para push
//             let nuevoIngreso = {
//                 motivo: tipoDeIngreso,
//                 monto: ingreso,
//                 fecha: fecha
//             }
//             persona.agregarIngreso(nuevoIngreso);
//             persona.sumaIngreso();
//             break;
//         case 2:
//             let tipoDeGasto = parseInt(prompt("tipo de Gasto: \n1-Tarjeta de credito💳 \n2-Impuestos 📝\n3-Vehiculos 🚘\n4-Supermercado🛒 \n5-Extra 🛒"));
//             if (tipoDeGasto === 1) {
//                 tipoDeGasto = "Tajeta de Credito";
//             }
//             else if (tipoDeGasto === 2) {
//                 tipoDeGasto = "Impuestos";
//             }
//             else if (tipoDeGasto === 3) {
//                 tipoDeGasto = "Vehiculos";
//             }
//             else if (tipoDeGasto === 4) {
//                 tipoDeGasto = "Supermercado";
//             }
//             else {
//                 tipoDeGasto = "Extra";
//             }
//             let gasto = parseInt(prompt("Monto del Gasto:"));

//             // formara el array para push
//             let nuevoGasto = {
//                 motivo: tipoDeGasto,
//                 monto: gasto,
//                 fecha: fecha
//             }
//             persona.agregarGasto(nuevoGasto);
//             persona.sumaGasto();
//             break;

//     }