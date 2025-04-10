document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", convertVolume);
});

function convertVolume() {
    let inputVolume = parseFloat(document.getElementById("inputTemp").value);
    let fromUnit = document.getElementById("fromVolume").value;
    let toUnit = document.getElementById("toVolume").value;
    
    if (isNaN(inputVolume)) {
        alert("Please enter a valid number for the volume.");
        return;
    }

    if (fromUnit === "---Select---" || toUnit === "---Select---") {
        alert("Please select both units.");
        return;
    }
    
    let conversionFactors = {
        "liter": 1,
        "milliliter": 1000,
        "cubic_meter": 0.001,
        "gallon_us": 0.264172,
        "gallon_uk": 0.219969,
        "cup": 4.16667,
        "fluid_ounce": 33.814
    };

    let baseValue = inputVolume / conversionFactors[fromUnit];
    let convertedValue = baseValue * conversionFactors[toUnit];
    
    document.getElementById("tempResult").innerText = convertedValue.toFixed(4);
}

function resetForm() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("fromVolume").value = "---Select---";
    document.getElementById("toVolume").value = "---Select---";
    document.getElementById("tempResult").innerText = "0";
}
