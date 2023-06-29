//Variables para utilizar en el calculo de dashboard
let mayorConsumo = 0;
let nombreMayorMotivo = '';
let nivelMes;
let ingresosDashboard = document.getElementById('ingresosPanel');
let egresosDashboard = document.getElementById('egresosPanel');
let porcentualDashboard = document.getElementById('porcentajePanel');
let restanteDashboard = document.getElementById('restantePanel');
// variables para capturar los datos del modal
let botones = document.getElementsByClassName('botonAdd');
let selectGas = document.getElementById('selectGas');
let selectIng = document.getElementById('selectIng');
let montoMovimiento = document.getElementById('monto');
let botonCargar = document.getElementById('cargarMovimiento');
//Variables para los botones que generaran la lista de gasto
let listaIngresos = document.getElementById('listadoDeIngresos');
let listaGastos = document.getElementById('listadoDeEgresos')
//Variable para capturar donde se generara la lista de gastos
let listaMovimientos = document.getElementById('movimientoDetallados');



CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
seleccionIngresoGasto();
seleccionMovimiento();

let elegirOpcion = '';
let movimiento = [];
let IngGas;
let fecha = new Date().toLocaleDateString();


botonCargar.addEventListener('click', () => {
    elegirOpcion = {
        motivo: elegirOpcion,
        monto: parseInt(montoMovimiento.value),
        fecha: fecha
    }
    if (IngGas === 1) {
        persona.agregarIngreso(elegirOpcion);
        persona.sumaIngreso();
    } else {
        persona.agregarGasto(elegirOpcion);
        persona.sumaGasto();
        console.log(persona.sumaGasto())
    }
    console.table('gasto/ingreso agregado');
    limpiarMovimiento();
    CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
    mostrarListado();

});
mostrarListado();



//ACCION DE BOTON INGRESO/GASTO
function seleccionIngresoGasto() {
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
                IngGas = 1;
            } else {
                console.log('click en gasto')
                selectGas.disabled = false;
                selectIng.disabled = true;
                IngGas = 2;
            }
            boton.classList.add('active');
        });
    }
}
function seleccionMovimiento() {
    selectIng.addEventListener('change', () => {
        elegirOpcion = selectIng.value;
        console.log(elegirOpcion);
    });
    selectGas.addEventListener('change', () => {
        elegirOpcion = selectGas.value;
        console.log('elegiste un gasto con el motivo', elegirOpcion);
    });
}


listaGastos.addEventListener('click', () => {
    mostrarListado('gastos');
});

listaIngresos.addEventListener('click', () => {
    mostrarListado('ingresos');
});

function mostrarListado(tipo) {
    listaMovimientos.innerHTML = "";

    if (tipo === 'ingresos') {
        // Mostrar lista de ingresos
        for (const ingreso of persona.ingresos.movimientos) {
            let movimiento = document.createElement('tr');
            movimiento.innerHTML = `
                <td>${ingreso.motivo}</td>
                <td>$${ingreso.monto}</td>
                <td>${ingreso.fecha}</td>
            `;
            listaMovimientos.appendChild(movimiento);
        }
    } else if (tipo === 'gastos') {
        // Mostrar lista de gastos
        for (const gasto of persona.gastos.movimientos) {
            let movimiento = document.createElement('tr');
            movimiento.innerHTML = `
                <td>${gasto.motivo}</td>
                <td>$${gasto.monto}</td>
                <td>${gasto.fecha}</td>
            `;
            listaMovimientos.appendChild(movimiento);
        }
    }

    // Mostrar la lista de movimientos
    if (listaMovimientos.classList.contains('d-none')) {
        listaMovimientos.classList.remove('d-none');
    }
}

//Funcion para calcular restante que queda en la billetera


function CalculateWallet(incr, decr) {
    persona.balanceTotal = incr - decr;
    // Round para redondeo
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
    //refresca dashboard
    restanteDashboard.innerText = `$${[persona.balanceTotal]}`;
    porcentualDashboard.innerText = `${[persona.porcentualBilletera]}%`;
    egresosDashboard.innerText = `$${persona.sumaGasto()}`;
    ingresosDashboard.innerText = `$${persona.sumaIngreso()}`;
};


//LIMPIADOR CAMPOS MODAL
function limpiarMovimiento() {
    selectGas.selectedIndex = 0;
    selectIng.selectedIndex = 0;
    selectGas.disabled = true;
    selectIng.disabled = true;
    montoMovimiento.value = "";
};