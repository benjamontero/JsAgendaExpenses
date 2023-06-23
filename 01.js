

// // Variables globales
// let elegirOpcion = 0;
// let mayorConsumo = 0;
// let nombreMayorMotivo = '';
// let nivelMes;
// // las 3 principales opciones del usuario
// //elegirOpcion = parseInt(prompt("Bienvenido " + persona.nombre + " a tu calculadora de gastos. Que necesitas hacer: \n1-Ingresos ⬆️\n2-Gastos ⬇️ \n3-Mostrar Status(salir) 📉"));


// while (elegirOpcion != 3) {
//     // captura la fecha del dia para guardar en el array
//     let fecha = new Date().toLocaleDateString();
//     // Con esto elegiremos el ingreso/Gasto sectorizado
//     switch (elegirOpcion) {
//         case 1:
//             let tipoDeIngreso = parseInt(prompt("tipo de ingreso: \n1-Sueldo 💵 \n2-Aguinaldo💰  \n3-Extra 💵"));
//             if (tipoDeIngreso === 1) {
//                 tipoDeIngreso = "Sueldo";
//             }
//             else if (tipoDeIngreso === 2) {
//                 tipoDeIngreso = "Aguinaldo";
//             }
//             else {
//                 tipoDeIngreso = "Extra";
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

//     elegirOpcion = parseInt(prompt("Gracias " + persona.nombre + " el valor fue agregado correctamente, te gustaria seguir agregando? \n1-Ingresos ⬆️\n2-Gastos ⬇️\n3-Mostrar Status 📉"));
// }
// CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
// //metodo para agrupar gastos por motivo
// obtenerMayorConsumo();

// function obtenerMayorConsumo() {
//     const motivos = ["Tarjeta de credito", "Impuestos", "Vehiculo", "Supermercado", "Extra"];

//     motivos.forEach((motivo => {
//         // filtra en el array principal y genera otro array si cumple con la cond
//         const gastosFiltrados = persona.gastos.movimientos.filter((gasto) => gasto.motivo === motivo);
//         // calcula cuando total de montos en los array de gastos filtrados
//         const gastosTotalFiltrado = gastosFiltrados.reduce((acumulador, gasto) => acumulador + gasto.monto, 0);
//         // calculara entre todos los valores que vaya teniendo gastostotalfiltrado para poder comparar
//         // console.log(gastosTotalFiltrado);
//         if (mayorConsumo < gastosTotalFiltrado) {
//             mayorConsumo = gastosTotalFiltrado;
//             nombreMayorMotivo = motivo;
//         }
//     }
//     ))
// }


// elegirOpcion = parseInt(prompt(`Hola ${persona.nombre}\nTus ingresos este mes fueron: \$${persona.sumaIngreso()}\nTus Gastos este mes fueron: \$${persona.sumaGasto()}.\nAun tienes disponible: \$${persona.balanceTotal}.\nQuedan en tu billetera un el ${persona.porcentualBilletera}% de tus ingresos.\n Este mes tu mayor consumo fue: $${mayorConsumo} en ${nombreMayorMotivo}
// \nConsejo: ${nivelMes}
// \n-----------Programa finalizado----------\n01-Salir`));

// //Funcion para calcular restante que queda en la billetera
// function CalculateWallet(incr, decr) {
//     persona.balanceTotal = incr - decr;
//     //console.log(persona.balanceTotal);
//     // Round para redondeo
//     persona.porcentualBilletera = Math.round(((incr - decr) / incr) * 100);
//     if ((persona.porcentualBilletera >= 1) && (persona.porcentualBilletera <= 10)) {
//         nivelMes = "Verifica tus margenes, estas cerca que quedarte sin dinero";
//     } else if ((persona.porcentualBilletera >= 11) && (persona.porcentualBilletera <= 30)) {
//         nivelMes = "Bien, buena administracion";
//     } else if ((persona.porcentualBilletera >= 31) && (persona.porcentualBilletera <= 50)) {
//         nivelMes = "Es un gran Mes! sigue asi!";
//     } else {
//         nivelMes = "Es un excelente mes para Ahorrar capital";

//     }
//     // console.log("Quedan en tu billetera un total de: $" + persona.balanceTotal + "quedan en tu billetera un el " + persona.porcentualBilletera + "% de tus ingresos");
// };

// let IngresosDashboard = document.getElementById('ingresosPanel');
// IngresosDashboard.innerText = `$${persona.sumaIngreso()}`;

