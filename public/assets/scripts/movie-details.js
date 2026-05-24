import { ApiClient } from './apiClient.js';
import { ErrorHandler } from './error-handler.js';
import addCartButtonListeners from './cart-button-listeners.js';
import { cartInstance } from './cart.js';

export class MovieDetails {
    constructor (movieId) {
        this.movieId = movieId;
    }

    async init () {
        try {
            const movie = await new ApiClient().get(this.movieId);
            if (!movie)
               return ErrorHandler.displayError();
            
            const metaData = document.querySelector('meta');
            metaData.setAttribute('content', `${movie.data.title} movie description page`);
            metaData.setAttribute('title', `SquareEyes — ${movie.data.title}`);
            
            setTimeout(() => {
               this.renderMovieDetails(movie); 
            }, 500);
        } catch (e) {
            ErrorHandler.displayError(e);
        }
    }
    
    renderMovieDetails(movie) {
        const section = document.querySelector('.section-content');

        const movieDetail = document.createElement('div');
        movieDetail.className = 'movie-detail';

        const movieCoverImage = document.createElement('img');
        movieCoverImage.className = 'movie-detail-cover-image';
        movieCoverImage.src = movie.data.image.url;
        movieCoverImage.alt = movie.data.image.alt?.length > 0 ? movie.data.image.alt : '';

        const movieTitle = document.createElement('h1');
        movieTitle.className = 'movie-title';
        movieTitle.textContent = movie.data.title;

        const movieDetailContent = document.createElement('div');
        movieDetailContent.className = 'movie-detail-content';

        const tagAndRating = document.createElement('div');
        tagAndRating.className = 'movie-detail-meta';

        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = movie.data.genre;

        const rating = document.createElement('p');
        rating.className = 'rating';
        rating.textContent = `Rated ${movie.data.rating}/10`;

        tagAndRating.append(tag, rating);

        const movieDescription = document.createElement('p');
        movieDescription.textContent = movie.data.description;

        let price;
        if (movie.data.onSale) {
            price = document.createElement('div');

            const currentPrice = document.createElement('span');
            currentPrice.className = 'price-current';
            currentPrice.textContent = `${movie.data.discountedPrice},- `;

            const originalPrice = document.createElement('span');
            originalPrice.className = 'price-original';
            originalPrice.textContent = movie.data.price;

            price.append(currentPrice, originalPrice)
        } else {
            price = document.createElement('p');
            price.className = 'price-current';
            price.textContent = movie.data.price;
        }

        const cartButton = document.createElement('button');
        cartButton.classList.add('btn', 'btn-primary');
        if (cartInstance.cartItems[movie.data.title.toLowerCase()]) {
            cartButton.textContent = 'added to cart';
            cartButton.classList.add('btn-added-to-cart');
        } else {
            cartButton.textContent = 'add to cart';
        }
        
        addCartButtonListeners(cartButton, movie.data);

        movieDetailContent.append(tagAndRating, movieDescription, price, cartButton);
        movieDetail.append(movieCoverImage, movieTitle, movieDetailContent);
        section.replaceWith(movieDetail);
    }
}

const parameters = new URLSearchParams(window.location.search);
const movie = new MovieDetails(parameters.get('id'));
await movie.init();