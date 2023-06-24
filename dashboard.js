//Panel con los resultados
let ingresosDashboard = document.getElementById('ingresosPanel');
ingresosDashboard.innerText = `$${persona.sumaIngreso()}`;

let egresosDashboard = document.getElementById('egresosPanel');
egresosDashboard.innerText = `$${persona.sumaGasto()}`;

let porcentualDashboard = document.getElementById('porcentajePanel');
porcentualDashboard.innerText = `${[persona.porcentualBilletera]}%`;

let restanteDashboard = document.getElementById('restantePanel');
restanteDashboard.innerText = `$${[persona.balanceTotal]}`;

//Listar los gastos o ingresos

let listaGastos = document.getElementById('movimientoDetallados')

for (const gasto of persona.gastos.movimientos) {
    let movimiento = document.createElement('tr')
    movimiento.innerHTML = `
        <td>${gasto.motivo}</td>
        <td>$${gasto.monto}</td>
        <td>${gasto.fecha}</td>
        <td>
            <button type="button" class="btn btn-outline-primary">Modificar</button>
            <button type="button" class="btn btn-outline-primary">Eliminar</button>
        </td>
    `;
    listaGastos.appendChild(movimiento);

}


