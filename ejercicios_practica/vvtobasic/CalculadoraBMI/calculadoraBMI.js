function calcularBMI(peso, altura) {
    console.log("Calculando  tu BMI...");
    var bmi = peso / (altura * altura);
    console.log("Tu BMI es: ".concat(bmi.toFixed(2)));
    if (bmi < 18.5) {
        console.log("***** BAJO PESO *****");
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("***** NORMAL *****");
    }
    else if (bmi >= 25 && bmi < 29.9) {
        console.log("***** SOBRE PESO *****");
    }
    else {
        console.log("***** OBESIDAD *****");
    }
    //console.log("Cálculo de BMI completado.");
}
calcularBMI(65, 1.65);
console.log("El cálculo de tu BMI ha sido completado con éxito.");
