const exchangeRate = 83; // 1 USD = 83 INR (You can update this dynamically)

// Function to Add Expense
function addExpense() {
    let incomeINR = parseFloat(document.getElementById('income').value) || 0;
    let category = document.getElementById('expense-category').value;
    let subCategory = document.getElementById('sub-category').value; // Get sub-category
    let amountINR = parseFloat(document.getElementById('expense-amount').value) || 0;
    let amountUSD = (amountINR / exchangeRate).toFixed(2);

    if (amountINR <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    let table = document.getElementById('expense-table');
    let row = table.insertRow();
    row.innerHTML = `<td>${category}</td>
                     <td>${subCategory}</td> 
                     <td>${amountINR.toFixed(2)} INR / ${amountUSD} USD</td>
                     <td><button class="delete-btn" onclick="deleteExpense(this, ${amountINR})">Delete</button></td>`;

    updateTotals(amountINR);
}

// Function to Update Total Expense
function updateTotals(amountINR) {
    let totalElem = document.getElementById('total-expenses');
    let remainingElem = document.getElementById('remaining-balance');
    let incomeINR = parseFloat(document.getElementById('income').value) || 0;

    let currentTotalINR = parseFloat(totalElem.dataset.inr) || 0;
    let newTotalINR = currentTotalINR + amountINR;
    let newTotalUSD = (newTotalINR / exchangeRate).toFixed(2);

    totalElem.innerText = `${newTotalINR.toFixed(2)} INR / ${newTotalUSD} USD`;
    totalElem.dataset.inr = newTotalINR; // Store INR value for calculation

    let remainingINR = incomeINR - newTotalINR;
    let remainingUSD = (remainingINR / exchangeRate).toFixed(2);
    remainingElem.innerText = `${remainingINR.toFixed(2)} INR / ${remainingUSD} USD`;
}

// Function to Delete an Expense
function deleteExpense(button, amountINR) {
    let row = button.parentElement.parentElement;
    row.remove();
    updateTotals(-amountINR);
}

// Function to Reset Values
function resetValues() {
    document.getElementById('income').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-table').innerHTML = '';
    document.getElementById('total-expenses').innerText = '0 INR / 0 USD';
    document.getElementById('remaining-balance').innerText = '0 INR / 0 USD';
}
