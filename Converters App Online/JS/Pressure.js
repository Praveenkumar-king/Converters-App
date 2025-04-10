function convertSpeed() {
    let inputPressure = parseFloat(document.getElementById("inputTemp").value);
    let fromUnit = document.getElementById("fromPressure").value;
    let toUnit = document.getElementById("toPressure").value;

    if (isNaN(inputPressure)) {
        alert("Please enter a valid pressure value.");
        return;
    }

    if (fromUnit === "---Select---" || toUnit === "---Select---") {
        alert("Please select both 'From' and 'To' units.");
        return;
    }

    // Conversion to Pascal (Base Unit)
    let pressureInPascal;
    switch (fromUnit) {
        case "pascal": pressureInPascal = inputPressure; break;
        case "bar": pressureInPascal = inputPressure * 100000; break;
        case "psi": pressureInPascal = inputPressure * 6894.76; break;
        case "mmHg": pressureInPascal = inputPressure * 133.322; break;
        case "atm": pressureInPascal = inputPressure * 101325; break;
        default: alert("Invalid conversion"); return;
    }

    // Conversion from Pascal to Target Unit
    let convertedPressure;
    switch (toUnit) {
        case "pascal": convertedPressure = pressureInPascal; break;
        case "bar": convertedPressure = pressureInPascal / 100000; break;
        case "psi": convertedPressure = pressureInPascal / 6894.76; break;
        case "mmHg": convertedPressure = pressureInPascal / 133.322; break;
        case "atm": convertedPressure = pressureInPascal / 101325; break;
        default: alert("Invalid conversion"); return;
    }

    // Display the result
    document.getElementById("tempResult").textContent = convertedPressure.toFixed(4);
}

// Reset Function
function resetForm() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("fromPressure").value = "---Select---";
    document.getElementById("toPressure").value = "---Select---";
    document.getElementById("tempResult").textContent = "0";
}
