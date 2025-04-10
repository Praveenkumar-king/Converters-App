function convertSpeed() {
    let inputSpeed = parseFloat(document.getElementById("inputTemp").value);
    let fromUnit = document.getElementById("fromSpeed").value;
    let toUnit = document.getElementById("toSpeed").value;
    
    if (isNaN(inputSpeed)) {
        alert("Please enter a valid speed value.");
        return;
    }
    
    let speedInMetersPerSecond;
    
    // Convert from input unit to meters per second
    switch (fromUnit) {
        case "meterPerSecond":
            speedInMetersPerSecond = inputSpeed;
            break;
        case "kilometerPerHour":
            speedInMetersPerSecond = inputSpeed / 3.6;
            break;
        case "milePerHour":
            speedInMetersPerSecond = inputSpeed * 0.44704;
            break;
        case "footPerSecond":
            speedInMetersPerSecond = inputSpeed * 0.3048;
            break;
        case "knot":
            speedInMetersPerSecond = inputSpeed * 0.514444;
            break;
        default:
            alert("Invalid input unit");
            return;
    }
    
    let convertedSpeed;
    
    // Convert from meters per second to the target unit
    switch (toUnit) {
        case "meterPerSecond":
            convertedSpeed = speedInMetersPerSecond;
            break;
        case "kilometerPerHour":
            convertedSpeed = speedInMetersPerSecond * 3.6;
            break;
        case "milePerHour":
            convertedSpeed = speedInMetersPerSecond / 0.44704;
            break;
        case "footPerSecond":
            convertedSpeed = speedInMetersPerSecond / 0.3048;
            break;
        case "knot":
            convertedSpeed = speedInMetersPerSecond / 0.514444;
            break;
        default:
            alert("Invalid target unit");
            return;
    }
    
    document.getElementById("tempResult").innerText = convertedSpeed.toFixed(2);
}

function resetForm() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("fromSpeed").selectedIndex = 0;
    document.getElementById("toSpeed").selectedIndex = 0;
    document.getElementById("tempResult").innerText = "0";
}
