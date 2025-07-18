// DOM Elements
const ramSelect = document.getElementById('ram');
const storageSlider = document.getElementById('storage');
const storageValue = document.getElementById('storage-value');
const storagePrice = document.getElementById('storage-price');
const cpuSelect = document.getElementById('cpu');
const totalPriceElement = document.getElementById('total-price');
const orderButton = document.getElementById('order-btn');

// Pricing logic
const ramPrices = { 4: 200, 8: 400, 16: 800 };
const storagePricePerGB = 1; // ₹1 per GB
const cpuPrices = { 2: 300, 4: 600, 8: 1200 };

// Update storage value and price dynamically
storageSlider.addEventListener('input', () => {
    const storage = storageSlider.value;
    storageValue.textContent = `${storage}GB`;
    storagePrice.textContent = storage * storagePricePerGB;
    updateTotalPrice();
});

// Update total price dynamically
function updateTotalPrice() {
    const ramPrice = ramPrices[ramSelect.value];
    const storageCost = storageSlider.value * storagePricePerGB;
    const cpuPrice = cpuPrices[cpuSelect.value];
    const totalPrice = ramPrice + storageCost + cpuPrice;
    totalPriceElement.textContent = totalPrice;
}

// Add event listeners to update total price on changes
ramSelect.addEventListener('change', updateTotalPrice);
cpuSelect.addEventListener('change', updateTotalPrice);

// Handle order button click
orderButton.addEventListener('click', () => {
    const selectedPlan = {
        ram: `${ramSelect.value}GB`,
        storage: `${storageSlider.value}GB`,
        cpu: `${cpuSelect.value} Cores`,
        price: totalPriceElement.textContent
    };

    // Save the custom plan to localStorage
    localStorage.setItem('customPlan', JSON.stringify(selectedPlan));

    // Redirect to payment page
    window.location.href = `payment.html?plan=custom&price=${selectedPlan.price}`;
});