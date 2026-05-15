export class Cart {
    constructor() {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        this.cartItems = storedCart ? storedCart : {};
    }
    
    addOrRemoveFromCart(movie) {
        // To make the key case insensitive, all keys are stored in lowercase.
        const lowerCaseTitle = movie.title.toLowerCase();
        
        // Movie already exists in the cart, remove it.
        if(this.cartItems[lowerCaseTitle]) {
            delete this.cartItems[lowerCaseTitle];
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
            return;
        }
        
        this.cartItems[lowerCaseTitle] = new CartItem(movie);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
}

class CartItem {
    constructor(movie) {
        this.movieTitle = movie.title;
        this.moviePrice = movie.price;
    }
}

export const cartInstance = new Cart();