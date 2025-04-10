function calculateEMI() {
    // Get user input values
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let tenure = parseInt(document.getElementById("tenure").value);

    // Validate input fields
    if (isNaN(principal) || isNaN(rate) || isNaN(tenure) || principal <= 0 || tenure <= 0) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    let monthlyRate = rate / 100 / 12; // Convert annual rate to monthly
    let months = tenure * 12; // Convert years to months

    let emi;
    if (rate === 0) {
        emi = principal / months; // If no interest, simple division
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    emi = emi.toFixed(2); // Round to 2 decimal places

    let conversionRate = 83; // Example conversion rate (1 USD = 87 INR)
    let emiInUSD = (emi / conversionRate).toFixed(2);

    // Display results
    document.getElementById("emi-inr").innerText = emi;
    document.getElementById("emi-usd").innerText = emiInUSD;
}

// Function to reset all fields
function resetForm() {
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("tenure").value = "";
    document.getElementById("emi-inr").innerText = "0";
    document.getElementById("emi-usd").innerText = "0";
}
