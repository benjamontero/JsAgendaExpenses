// Preentrega 2 = persona es un objeto que contiene 2 arrays de objetos (gastos e ingresos)
const persona =
{
    nombre: "Benjamin",
    balanceTotal: 0,
    porcentualBilletera: 0,
    moneda: "Arg",
    ingresos: {
        movimientos: [
            {
                motivo: 'Sueldo',
                monto: 250000,
                fecha: new Date('06/01/23').toLocaleDateString()
            },
            {
                motivo: 'Aguinaldo',
                monto: 125000,
                fecha: new Date('07/01/23').toLocaleDateString()
            }
        ]

    },
    gastos: {
        movimientos: [
            {
                motivo: 'Supermercado',
                monto: 18450,
                fecha: new Date('06/02/23').toLocaleDateString()
            },
            {
                motivo: 'Tarjeta de credito',
                monto: 32333,
                fecha: new Date('06/05/23').toLocaleDateString()
            },
            {
                motivo: 'Tarjeta de credito',
                monto: 18234,
                fecha: new Date('06/07/23').toLocaleDateString()
            },
            {
                motivo: 'Impuestos',
                monto: 4300,
                fecha: new Date('06/01/23').toLocaleDateString()
            },
            {
                motivo: 'Vehiculo',
                monto: 15300,
                fecha: new Date('06/04/23').toLocaleDateString()
            },
            {
                motivo: 'Extra',
                monto: 1200,
                fecha: new Date('06/04/23').toLocaleDateString()
            },
            {
                motivo: 'Extra',
                monto: 3500,
                fecha: new Date('06/06/23').toLocaleDateString()
            }
        ],
    },
    // Preentrega 2: metodos para agregar al gastos/ingresoss
    agregarIngreso(ingreso) {
        this.ingresos.movimientos.push(ingreso);
    },
    agregarGasto(gasto) {
        this.gastos.movimientos.push(gasto);
    },
    // Preentrega 2: metodos para mostrar el total de gastos/ingresos
    sumaIngreso() {
        const totalIngresos = this.ingresos.movimientos.reduce((acumulador, ingreso) => acumulador + ingreso.monto, 0)
        return totalIngresos;
    },
    sumaGasto() {
        const totalGastos = this.gastos.movimientos.reduce((acumulador, gasto) => acumulador + gasto.monto, 0)
        return totalGastos;

    },

}
// Variables globales

let mayorConsumo = 0;
let nombreMayorMotivo = '';
let nivelMes;
// las 3 principales opciones del usuario
//let elegirOpcion = parseInt(prompt("Bienvenido " + persona.nombre + " a tu calculadora de gastos. Que necesitas hacer: \n1-Ingresos ⬆️\n2-Gastos ⬇️ \n3-Mostrar Status(salir) 📉"));


while (elegirOpcion != 3) {
    //Preentrega 2: captura la fecha del dia para guardar en el array
    let fecha = new Date().toLocaleDateString();
    // Con esto elegiremos el ingreso/Gasto sectorizado
    switch (elegirOpcion) {
        case 1:
            let tipoDeIngreso = parseInt(prompt("tipo de ingreso: \n1-Sueldo 💵 \n2-Aguinaldo💰  \n3-Extra 💵"));
            if (tipoDeIngreso === 1) {
                tipoDeIngreso = "Sueldo";
            }
            else if (tipoDeIngreso === 2) {
                tipoDeIngreso = "Aguinaldo";
            }
            else {
                tipoDeIngreso = "Extra";
            }

            let ingreso = parseInt(prompt("Monto del ingreso:"));
            //Preentrega 2: formara el array para push
            let nuevoIngreso = {
                motivo: tipoDeIngreso,
                monto: ingreso,
                fecha: fecha
            }
            persona.agregarIngreso(nuevoIngreso);
            persona.sumaIngreso();
            break;
        case 2:
            let tipoDeGasto = parseInt(prompt("tipo de Gasto: \n1-Tarjeta de credito💳 \n2-Impuestos 📝\n3-Vehiculos 🚘\n4-Supermercado🛒 \n5-Extra 🛒"));
            if (tipoDeGasto === 1) {
                tipoDeGasto = "Tajeta de Credito";
            }
            else if (tipoDeGasto === 2) {
                tipoDeGasto = "Impuestos";
            }
            else if (tipoDeGasto === 3) {
                tipoDeGasto = "Vehiculos";
            }
            else if (tipoDeGasto === 4) {
                tipoDeGasto = "Supermercado";
            }
            else {
                tipoDeGasto = "Extra";
            }
            let gasto = parseInt(prompt("Monto del Gasto:"));

            //Preentrega 2: formara el array para push
            let nuevoGasto = {
                motivo: tipoDeGasto,
                monto: gasto,
                fecha: fecha
            }
            persona.agregarGasto(nuevoGasto);
            persona.sumaGasto();
            break;

    }

    elegirOpcion = parseInt(prompt("Gracias " + persona.nombre + " el valor fue agregado correctamente, te gustaria seguir agregando? \n1-Ingresos ⬆️\n2-Gastos ⬇️\n3-Mostrar Status 📉"));
}
CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
//metodo para agrupar gastos por motivo 
obtenerMayorConsumo();

function obtenerMayorConsumo() {
    const motivos = ["Tarjeta de credito", "Impuestos", "Vehiculo", "Supermercado", "Extra"];

    motivos.forEach((motivo => {
        //Preentrega 2: filtra en el array principal y genera otro array si cumple con la cond
        const gastosFiltrados = persona.gastos.movimientos.filter((gasto) => gasto.motivo === motivo);
        //Preentrega 2: calcula cuando total de montos en los array de gastos filtrados
        const gastosTotalFiltrado = gastosFiltrados.reduce((acumulador, gasto) => acumulador + gasto.monto, 0);
        //Preentrega 2: calculara entre todos los valores que vaya teniendo gastostotalfiltrado para poder comparar
        // console.log(gastosTotalFiltrado);
        if (mayorConsumo < gastosTotalFiltrado) {
            mayorConsumo = gastosTotalFiltrado;
            nombreMayorMotivo = motivo;
        }
    }
    ))

}


elegirOpcion = parseInt(prompt(`Hola ${persona.nombre}\nTus ingresos este mes fueron: \$${persona.sumaIngreso()}\nTus Gastos este mes fueron: \$${persona.sumaGasto()}.\nAun tienes disponible: \$${persona.balanceTotal}.\nQuedan en tu billetera un el ${persona.porcentualBilletera}% de tus ingresos.\n Este mes tu mayor consumo fue: $${mayorConsumo} en ${nombreMayorMotivo}
\nConsejo: ${nivelMes}
\n-----------Programa finalizado----------\n01-Salir`));

//Funcion para calcular restante que queda en la billetera
function CalculateWallet(incr, decr) {
    persona.balanceTotal = incr - decr;
    //console.log(persona.balanceTotal);
    //Preentrega 2: Round para redondeo
    persona.porcentualBilletera = Math.round(((incr - decr) / incr) * 100);
    if ((persona.porcentualBilletera >= 1) && (persona.porcentualBilletera <= 10)) {
        nivelMes = "Verifica tus margenes, estas cerca que quedarte sin dinero";
    } else if ((persona.porcentualBilletera >= 11) && (persona.porcentualBilletera <= 30)) {
        nivelMes = "Bien, buena administracion";
    } else if ((persona.porcentualBilletera >= 31) && (persona.porcentualBilletera <= 50)) {
        nivelMes = "Es un gran Mes! sigue asi!";
    } else {
        nivelMes = "Es un excelente mes para Ahorrar capital";

    }
   // console.log("Quedan en tu billetera un total de: $" + persona.balanceTotal + "quedan en tu billetera un el " + persona.porcentualBilletera + "% de tus ingresos");
};



