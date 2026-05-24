import { cartInstance } from './cart.js';

export default function addCartButtonListeners(button, movie) {
    button.addEventListener('click', (e) => {
        cartInstance.addOrRemoveFromCart(movie);
        e.target.classList.toggle('btn-added-to-cart');
        e.target.classList.remove('btn-remove-from-cart');
        e.target.innerText = !cartInstance.cartItems[movie.title.toLowerCase()] ? 'add to cart' : 'added to cart';
    });

    button.addEventListener('mouseenter', (e) => {
        if (!e.target.classList.contains('btn-added-to-cart'))
            return;
        e.target.classList.add('btn-remove-from-cart');
        e.target.textContent = 'remove from cart';
    });

    button.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('btn-remove-from-cart');
        e.target.textContent = !cartInstance.cartItems[movie.title.toLowerCase()] ? 'add to cart' : 'added to cart';
    });
}
