const userName = prompt("Bienvenido a tu agenda de Gasto Personal 💰 \n Como es tu nombre?");
//declaramos las variables totales
let totalBudget = 0;
let totalExpenses = 0;
let wallet;
let porcentualWallet;
let lvlMonth;
//Valida la entrada del nombre
while ((userName == "") || (userName == " ")) {
    alert("Nombre de usuario Invalido, Por favor ingrese nuevamente");
    userName = prompt("Ingresa nuevamente");
}

// las 3 principales opciones del usuario
let chooseOption = parseInt(prompt("Bienvenido " + userName + " a tu calculadora de gastos. Que necesitas hacer: \n1-Ingresos ⬆️\n2-Gastos ⬇️"));


while (chooseOption != 3) {

    switch (chooseOption) {
        case 1:
            let tipeOfBudget = parseInt(prompt("tipo de ingreso: \n1-Sueldo 💵 \n2-Aguinaldo💰")); //proxima version incorporara esto
            let budget = parseInt(prompt("Monto del ingreso:"));
            increaseBugdet(budget);
            break;
        case 2:
            let tipeOfExpense = parseInt(prompt("tipo de Gasto: \n1-Tarjetas de credito💳 \n2-Impuestos 📝\n3-Vehiculos 🚘\n4-Supermercado/Kiosco 🛒")); //proxima version incorporara esto
            let expense = parseInt(prompt("Monto del Gasto:"));
            increaseExpense(expense);

    }

    chooseOption = parseInt(prompt("Gracias " + userName + " el valor fue agregado correctamente, te gustaria seguir agregando? \n1-Ingresos ⬆️\n2-Gastos ⬇️\n3-Mostrar Status 📉"));
}
CalculateWallet(totalBudget,totalExpenses)
chooseOption = parseInt(prompt(`Hola ${userName}\nTus ingresos este mes fueron: \$${totalBudget}\nTus Gastos este mes fueron: \$${totalExpenses}.\nAun tienes disponible: \$${wallet}.\nQuedan en tu billetera un el ${porcentualWallet}% de tus ingresos. \nConsejo: ${lvlMonth}\n-----------Programa finalizado----------\n01-Salir`));


//Funcion para Sumar Ingreso
function increaseBugdet(budget) {
    totalBudget = totalBudget + budget;
    console.log("Billetera de " + userName + "\nEl total de ingresos es: " + totalBudget+ "\nEl total de Gastos es: " + totalExpenses)
}
//Funcion para Sumar egreso
function increaseExpense(expense) {
    totalExpenses = totalExpenses + expense;
    console.log("Billetera de " + userName + "\nEl total de ingresos es: " + totalBudget + "\nEl total de Gastos es: " + totalExpenses )
}
//Funcion para calcular restante que queda en la billetera
function CalculateWallet (incr, decr){
    wallet = incr- decr;
  
    porcentualWallet = (decr/incr)*100;
    if((porcentualWallet >=1) && (porcentualWallet<=10)){
        lvlMonth = "Verifica tus margenes, estas cerca que quedarte sin dinero";
    }else if ((porcentualWallet >=11) && (porcentualWallet<=30)){
        lvlMonth = "Bien, buena administracion";
    }else if ((porcentualWallet >=31) && (porcentualWallet<=50)){
        lvlMonth = "Es un gran Mes! sigue asi!";
    }else{
        lvlMonth = "Es un excelente mes para Ahorrar capital";
    }
    console.log("Quedan en tu billetera un total de: $" + wallet+ "quedan en tu billetera un el "+porcentualWallet +"% de tus ingresos");
}
