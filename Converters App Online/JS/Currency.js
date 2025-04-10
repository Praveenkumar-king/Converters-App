const API_KEY = "c2f1eca863ac18431d8fdfc2"; // Your API Key
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");

// Fetch available currencies and populate dropdowns
async function fetchCurrencies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const currencies = Object.keys(data.conversion_rates);
        fromCurrency.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
        toCurrency.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');

        fromCurrency.value = "USD"; // Default from currency
        toCurrency.value = "INR"; // Default to currency
    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

// Convert currency
async function convertCurrency() {
    const amount = amountInput.value;
    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;
    const conversionURL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

    try {
        const response = await fetch(conversionURL);
        const data = await response.json();

        const rate = data.conversion_rates[to];
        const convertedAmount = (amount * rate).toFixed(2);

        result.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
    } catch (error) {
        console.error("Error converting currency:", error);
    }
}

// Reset fields function
function resetFields() {
    amountInput.value = ""; // Clear input
    fromCurrency.value = "USD"; // Reset currency selection
    toCurrency.value = "INR";
    result.innerHTML = ""; // Clear result
}

// Initialize dropdowns
fetchCurrencies();
