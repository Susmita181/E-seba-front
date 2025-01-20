const paymentOptions = document.querySelectorAll('.payment-option');
const payButton = document.getElementById('payButton');
let selectedOption = null;

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Reset all options
        paymentOptions.forEach(opt => opt.style.borderColor = 'transparent');

        // Highlight selected option
        option.style.borderColor = '#007bff';
        selectedOption = option.id;
        payButton.disabled = false;
    });
});

payButton.addEventListener('click', () => {
    if (selectedOption) {
        alert(`You have selected ${selectedOption.toUpperCase()} as your payment method.`);
        // Redirect to payment gateway or handle payment logic
    }
});
