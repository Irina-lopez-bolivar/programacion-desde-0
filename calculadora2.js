function calcularCalorias() {
    let genero = document.getElementById("genero").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let edad = parseInt(document.getElementById("edad").value);
    let actividad = parseFloat(document.getElementById("actividad").value);
    let objetivo = document.getElementById("objetivo").value;

    if (isNaN(peso) || isNaN(altura) || isNaN(edad)) {
        document.getElementById("resultadoCalorias").textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    // Cálculo de calorías base
    let caloriasBase = (10 * peso) + (6.25 * altura) - (5 * edad);
    caloriasBase += (genero === "hombre") ? 5 : -161;

    // Aplicar nivel de actividad
    let caloriasFinal = caloriasBase * actividad;
 // Ajuste según el objetivo
 if (objetivo === "bajar") caloriasFinal -= 500;
 if (objetivo === "subir") caloriasFinal += 500;

 // Evitar valores negativos
 caloriasFinal = Math.max(caloriasFinal, 0);

 // Mostrar resultado
 document.getElementById("resultadoCalorias").textContent = 'Calorías diarias recomendadas: ${caloriasFinal.toFixed(2)}';
}