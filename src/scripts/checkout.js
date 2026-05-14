class Checkout {
    constructor() {
        this.init();
    }

    init() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        this.orderSummary = document.getElementById('order-summary');
        let totalPrice = 0;

        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.removeItem('cartItems');
            location.assign('./checkout-success.html');
        });
        
        if(!cartItems || Object.keys(cartItems).length === 0) {
            const itemRowDiv = document.createElement('div');
            const itemRowParagraph = document.createElement('p');
            itemRowParagraph.textContent = 'Your cart is empty.';
            itemRowDiv.appendChild(itemRowParagraph);
            this.orderSummary.appendChild(itemRowDiv);
            return;
        }

        Object.values(cartItems).forEach(cartItem => {
            totalPrice += cartItem.moviePrice;
            const itemRowDiv = document.createElement('div');
            const movieTitleParagraph = document.createElement('p');
            movieTitleParagraph.textContent = cartItem.movieTitle;
            const moviePriceParagraph = document.createElement('p');
            moviePriceParagraph.textContent = `${cartItem.moviePrice},-`;
            itemRowDiv.appendChild(movieTitleParagraph);
            itemRowDiv.appendChild(moviePriceParagraph);
            this.orderSummary.appendChild(itemRowDiv);
        });
        
        const totalRow = document.createElement('div');
        const totalRowText = document.createElement('p');
        const totalRowPrice = document.createElement('p');
        totalRowText.textContent = 'Total:';
        totalRowPrice.textContent = `${totalPrice},-`;
        totalRow.appendChild(totalRowText);
        totalRow.appendChild(totalRowPrice);
        this.orderSummary.append(totalRow);
    }
}

new Checkout();