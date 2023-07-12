//Variables para utilizar en el calculo de dashboard
let mayorConsumo = 0;
let nombreMayorMotivo = '';
let nivelMes;
let ingresosDashboard = document.getElementById('ingresosPanel');
let egresosDashboard = document.getElementById('egresosPanel');
let porcentualDashboard = document.getElementById('porcentajePanel');
let restanteDashboard = document.getElementById('restantePanel');
// variables para CAPTURAR los datos del modal
let buttonIng = document.getElementById('buttonIng');
let buttonGas = document.getElementById('buttonGas');
let botones = document.getElementsByClassName('botonAdd');
let selectGas = document.getElementById('selectGas');
let selectIng = document.getElementById('selectIng');
let montoMovimiento = document.getElementById('monto');
let botonCargar = document.getElementById('cargarMovimiento');
//Variables para los BOTONES que generaran las listas
let listaIngresos = document.getElementById('listadoDeIngresos');
let listaGastos = document.getElementById('listadoDeEgresos')
//Variables para CAPTURAR donde se generara la lista 
let listaMovimientos = document.getElementById('movimientoDetallados');
//Variable para CAMBIO de monera
const switchMoneda = document.getElementById('flexSwitchCheckDefault');

// Verificar si existen datos en el almacenamiento local
if (localStorage.getItem('persona')) {
    // Obtener los datos almacenados y asignarlos al objeto persona
    const personaData = JSON.parse(localStorage.getItem('persona'));
    Object.assign(persona, personaData);
}
CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
seleccionIngresoGasto();
seleccionMovimiento();

let elegirOpcion = '';
let movimiento;
let elemento = [];
let IngGas;
let fecha = new Date().toLocaleDateString();

botonCargar.addEventListener('click', () => {
    //VALIDACION: Verifica si los campos cumplen con las condiciones //FALTA VALIDAR QUE NO ENTRE LETRAS
    if (elegirOpcion !== "" && montoMovimiento.value !== "") {
        elemento = {
            motivo: elegirOpcion,
            monto: parseInt(montoMovimiento.value),
            fecha: fecha
        };

        if (IngGas === 1) {
            persona.agregarIngreso(elemento);
            persona.sumaIngreso();

        } else {
            persona.agregarGasto(elemento);
            persona.sumaGasto();
            console.log(persona.sumaGasto())
        };


        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Movimiento Cargado',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Datos Mal ingresados, intenta nuevamente',
            showConfirmButton: false,
            timer: 1500
        })
    }
    buttonGas.disabled = false;
    buttonIng.disabled = false;

    limpiarMovimiento();
    CalculateWallet(persona.sumaIngreso(), persona.sumaGasto());
    mostrarListado();

});

//LIMPIADOR CAMPOS MODAL
function limpiarMovimiento() {
    selectGas.selectedIndex = 0;
    selectIng.selectedIndex = 0;
    selectGas.disabled, selectIng.disabled = true;
    montoMovimiento.value = "";
    elemento = [];
    elegirOpcion = "";
};


//ACCION DE BOTONES INGRESO/GASTO
function seleccionIngresoGasto() {
    for (const boton of botones) {
        boton.addEventListener('click', () => {
            //DOM: BORRA TODOS LOS ACTIVE 
            for (const otroBoton of botones) {
                otroBoton.classList.remove('active');
            }
            if (boton.id === "buttonIng") {
                console.log('click en ingreso')
                selectIng.disabled = false;
                selectGas.disabled = true;
                IngGas = 1;
                buttonGas.disabled = true;

            } else {
                console.log('click en gasto')
                selectGas.disabled = false;
                selectIng.disabled = true;
                IngGas = 2;
                buttonIng.disabled = true;
            }
            boton.classList.add('active');
        });
    };
};
//SELECCION DE TIPO DE MOVIMIENTO
function seleccionMovimiento() {
    selectIng.addEventListener('change', () => elegirOpcion = selectIng.value);
    selectGas.addEventListener('change', () => elegirOpcion = selectGas.value);
}
//TABLAS DE INGRESOS Y GASTOS
listaGastos.addEventListener('click', () => mostrarListado('gastos'));
listaIngresos.addEventListener('click', () => mostrarListado('ingresos'));

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
    restanteDashboard.innerText = `$${persona.balanceTotal}`;
    porcentualDashboard.innerText = `${persona.porcentualBilletera}%`;
    egresosDashboard.innerText = `$${persona.sumaGasto()}`;
    ingresosDashboard.innerText = `$${persona.sumaIngreso()}`;
    cambiarMoneda();

};


function cambiarMoneda() {
    //CONSUMIENDO API - para cambio de moneda en el dashboard
    const URLDOLAR = 'https://api.bluelytics.com.ar/v2/latest';
    fetch(URLDOLAR)
        .then(respuesta => respuesta.json())
        .then(datos => {
            //      console.log(datos);
            const cotizacionesBlue = datos.blue;
            //       console.log(cotizacionesBlue.value_buy)

            switchMoneda.addEventListener('change', () => {
                if (switchMoneda.checked) {
                    restanteDashboard.innerText = `USD ${Math.round(persona.balanceTotal / cotizacionesBlue.value_buy)}`;
                    egresosDashboard.innerText = `USD ${Math.round(persona.sumaGasto() / cotizacionesBlue.value_buy)}`;
                    ingresosDashboard.innerText = `USD ${Math.round(persona.sumaIngreso() / cotizacionesBlue.value_buy)}`;

                } else {
                    restanteDashboard.innerText = `$${persona.balanceTotal}`;
                    porcentualDashboard.innerText = `${persona.porcentualBilletera}%`;
                    egresosDashboard.innerText = `$${persona.sumaGasto()}`;
                    ingresosDashboard.innerText = `$${persona.sumaIngreso()}`;
                };
            });
        });


}



