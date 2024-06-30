// checkout.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded and ready.");

    // Show card form by default
    document.getElementById('card-form').style.display = 'block';
    document.getElementById('paypal-form').style.display = 'none';

    // Event listener for payment method change
    document.querySelectorAll('input[name="payment-method"]').forEach(function (input) {
        input.addEventListener('change', function () {
            console.log("Payment method changed.");
            const paymentMethod = this.value;

            // Hide both forms initially
            document.getElementById('paypal-form').style.display = 'none';
            document.getElementById('card-form').style.display = 'none';

            if (paymentMethod === 'paypal') {
                document.getElementById('paypal-form').style.display = 'block';
                console.log("PayPal selected.");
            } else if (paymentMethod === 'visa') {
                document.getElementById('card-form').style.display = 'block';
                console.log("Visa selected.");
            }
        });
    });

    // Info box for CVV
    document.getElementById('cvv-info-icon').addEventListener('mouseenter', function () {
        document.getElementById('cvv-info-box').style.display = 'block';
    });

    document.getElementById('cvv-info-icon').addEventListener('mouseleave', function () {
        document.getElementById('cvv-info-box').style.display = 'none';
    });
});
