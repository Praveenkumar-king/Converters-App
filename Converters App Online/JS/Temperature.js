function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("inputTemp").value);
    let fromTemp = document.getElementById("fromTemp").value;
    let toTemp = document.getElementById("toTemp").value;
    let result;

    if (fromTemp === toTemp) {
        result = inputTemp;
    } else if (fromTemp === "celsius" && toTemp === "fahrenheit") {
        result = (inputTemp * 9/5) + 32;
    } else if (fromTemp === "celsius" && toTemp === "kelvin") {
        result = inputTemp + 273.15;
    } else if (fromTemp === "fahrenheit" && toTemp === "celsius") {
        result = (inputTemp - 32) * 5/9;
    } else if (fromTemp === "fahrenheit" && toTemp === "kelvin") {
        result = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromTemp === "kelvin" && toTemp === "celsius") {
        result = inputTemp - 273.15;
    } else if (fromTemp === "kelvin" && toTemp === "fahrenheit") {
        result = (inputTemp - 273.15) * 9/5 + 32;
    }

    document.getElementById("tempResult").innerText = result.toFixed(2);
}

function resetTempFields() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("tempResult").innerText = "0";
}
