function calculateBill() {
    let units = parseFloat(document.getElementById("units").value) || 0;
    let rate = parseFloat(document.getElementById("rate").value) || 0;
    let fixedPrice = parseFloat(document.getElementById("fixedPrice").value) || 0;
    let exchangeRate = 0.012; // Example: 1 INR = 0.012 USD
    
    let billInINR = (units * rate) + fixedPrice;
    let billInUSD = billInINR * exchangeRate;
    
    document.getElementById("billInINR").innerText = billInINR.toFixed(2);
    document.getElementById("billInUSD").innerText = billInUSD.toFixed(2);
}

function resetFields() {
    document.getElementById("units").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("fixedPrice").value = "";
    document.getElementById("billInINR").innerText = "0.00";
    document.getElementById("billInUSD").innerText = "0.00";
}
