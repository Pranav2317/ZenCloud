// Get plan details from localStorage
const plan = localStorage.getItem('paidPlan') || 'beginner';
const price = localStorage.getItem('paidPrice') || '99';
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 30);

document.getElementById('dashboard-plan').textContent = `Plan: ${plan.charAt(0).toUpperCase() + plan.slice(1)}`;
document.getElementById('dashboard-price').textContent = `Amount Paid: ₹${price}`;
document.getElementById('dashboard-expiry').textContent = `Expiry Date: ${expiryDate.toDateString()}`;

// Simulate usage statistics
const storageUsed = 25; // Example value
const totalStorage = 50; // Example value
const usagePercentage = (storageUsed / totalStorage) * 100;

document.getElementById('storage-used').textContent = `${storageUsed}GB`;
document.getElementById('storage-progress').style.width = `${usagePercentage}%`;