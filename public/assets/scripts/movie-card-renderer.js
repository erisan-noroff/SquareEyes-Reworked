import { cartInstance } from './cart.js';

export class MovieCardRenderer {
    constructor(moviesContainer, movies) {
        this.moviesContainer = moviesContainer;
        this.movies = movies;
        this.init();
    }

    init() {
        this.moviesContainer.innerHTML = this.movies.map((movie, index) => `
            <div class="card">
                <a href="movie.html?id=${movie.id}">
                    <img src="${movie.image.url?.length > 0 ? movie.image.url : ''}" alt="${movie.image.alt?.length > 0 ? movie.image.alt : ''}" />
                </a>
                <div class="card-tag">${movie.genre}</div>
                <div class="card-content">
                    <p class="card-title"><a href="movies.html?id=${movie.id}">${movie.title}</a></p>
                    <div class="card-content-row">
                        <p class="card-rating">Rated ${movie.rating}/10</p>
                        ${this.renderPrice(movie)}
                    </div>
                </div>
                <button type="button" data-i="${index}" class="btn btn-primary cart-button ${cartInstance.cartItems[movie.title.toLowerCase()] ? 'btn-added-to-cart' : ''}">
                ${!cartInstance.cartItems[movie.title.toLowerCase()] ? 'add to cart' : 'added to cart'}
                </button>
            </div>
        `).join('');

        const cartButtons = this.moviesContainer.querySelectorAll('.cart-button');
        for (let i = 0; i < cartButtons.length; i++) {
            cartButtons[i].addEventListener('click', (e) => {
                const movie = this.movies[e.target.dataset.i];
                cartInstance.addOrRemoveFromCart(movie);
                e.target.classList.toggle('btn-added-to-cart');
                e.target.innerText = !cartInstance.cartItems[movie.title.toLowerCase()] ? 'add to cart' : 'added to cart';
            });

            cartButtons[i].addEventListener('mouseover', (e) => {
                if (!e.target.classList.contains('btn-added-to-cart'))
                    return;

                e.target.textContent = 'remove from cart';
            });

            cartButtons[i].addEventListener('mouseleave', (e) => {
                const movie = this.movies[e.target.dataset.i];
                e.target.textContent = !cartInstance.cartItems[movie.title.toLowerCase()] ? 'add to cart' : 'added to cart';
            });
        }
    }

    renderPrice(movie) {
        if (!movie.onSale)
            return `<p class="card-price">${movie.price},-</p>`;

        return `
          <div class="card-prices">
              <span class="card-price-sale">${movie.discountedPrice},-</span>
              <span class="card-price-original">${movie.price},-</span>
          </div>
      `;
    }
}