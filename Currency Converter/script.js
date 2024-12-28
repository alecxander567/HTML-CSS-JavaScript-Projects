const inputCurrency = document.getElementById("inputCurrency");
const targetCurrency = document.getElementById("targetCurrency");
const exchangeValue = document.getElementById("exchangeValue");
const fromInput = document.getElementById("fromInput");
const output = document.getElementById("output");
const convert = document.getElementById("convert");
const clear = document.getElementById("clear");

const apiKey = "fca_live_GtFdCghqb9wGbuWUKdfSAOpmHeqXPGD0gDNzsgCd";
const apiUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_GtFdCghqb9wGbuWUKdfSAOpmHeqXPGD0gDNzsgCd";

convert.addEventListener("click", () => {
const input = parseFloat(inputCurrency.value);

fetch (apiUrl)
    .then (response => {
        if (!response.ok) {
            throw new Error("There was a problem fetching the api!");
        }
        return response.json();
    })
    .then (data => {
        console.log(data);

        // Getting the currencies
        const rates = data.data;
        const selectedCurrency = targetCurrency.value; 
        const exchangeRate = rates[selectedCurrency]; 

        // If no currency available in JSON
        if (!exchangeRate) {
            alert("Exchange rate for the selected currency is not available.");
            return;
        }
        
        // Calculate the amount
        const convertedAmount = input * exchangeRate;
      
        output.textContent = `${convertedAmount.toFixed(2)} ${selectedCurrency}`;
    })
      fromInput.textContent = `${input} ${exchangeValue.value}`;
});

// Clears the input and output field
clear.addEventListener("click", () => {
    inputCurrency.value = "";
    targetCurrency.value = "#";
    exchangeValue.value = "#";
    fromInput.textContent = "00";
    output.textContent = "00";
});

