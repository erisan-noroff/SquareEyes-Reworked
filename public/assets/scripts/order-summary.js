import { cartInstance } from './cart.js';

export class OrderSummary {
    init() {
        const cartItemsRow = document.querySelector('.order-summary-item-rows');
        if (cartInstance.cartIsEmpty()) {
            const emptyCart = document.createElement('div');
            emptyCart.className = 'order-summary-empty-cart';
            emptyCart.textContent = 'Nothing here yet!';
            cartItemsRow.append(emptyCart);
            return;
        }
        
        document.querySelector('.checkout-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            cartInstance.emptyCart();
            document.location = new URL('checkout-success.html', window.location.href).toString();
        });
        
        let totalPrice = 0;

        for (const cartItem of Object.values(cartInstance.cartItems)) {
            totalPrice += cartItem.moviePrice;
            
            const row = document.createElement('div');
            row.className = 'order-summary-row';
            
            const title = document.createElement('p');
            title.textContent = cartItem.movieTitle;
            
            const price = document.createElement('p');
            price.textContent = `${cartItem.moviePrice},-`;
            
            row.append(title, price);
            cartItemsRow.append(row);
        }
        
        const totalPriceRow = document.createElement('div');
        totalPriceRow.classList.add('order-summary-row', 'order-summary-total-row');
        const total = document.createElement('p');
        total.textContent = 'Total';
        const totalAmount = document.createElement('p');
        totalAmount.textContent = `${totalPrice},-`;
        
        totalPriceRow.append(total, totalAmount);
        document.querySelector('.order-summary')?.append(totalPriceRow);
    }
}

new OrderSummary().init();