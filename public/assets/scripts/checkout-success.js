class CheckoutSuccess {
    constructor() {
        this.init();
    }
    
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.generateRandomOrderNumber();
        });
    }
    
    generateRandomOrderNumber() {
        document.getElementById('order-number').textContent += Math.floor(100000 + Math.random() * 900000);
    }
}

new CheckoutSuccess();