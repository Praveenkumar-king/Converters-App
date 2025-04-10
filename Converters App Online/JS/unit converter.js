function convertLength() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let conversionRates = {
        meter: { meter: 1, kilometer: 0.001, mile: 0.000621371, yard: 1.09361, foot: 3.28084 },
        kilometer: { meter: 1000, kilometer: 1, mile: 0.621371, yard: 1093.61, foot: 3280.84 },
        mile: { meter: 1609.34, kilometer: 1.60934, mile: 1, yard: 1760, foot: 5280 },
        yard: { meter: 0.9144, kilometer: 0.0009144, mile: 0.000568182, yard: 1, foot: 3 },
        foot: { meter: 0.3048, kilometer: 0.0003048, mile: 0.000189394, yard: 0.333333, foot: 1 }
    };

    let result = inputValue * conversionRates[fromUnit][toUnit];
    document.getElementById("result").innerText = result.toFixed(4);
}

function resetFields() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").innerText = "0";
}
