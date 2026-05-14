import { ApiClient } from './apiClient.js';
import { ErrorHandler } from './error-handler.js';

export class MovieDetails {
    constructor (movieId) {
        this.movieId = movieId;
    }

    async init () {
        const loadingIndicator = document.getElementById('loading');
        try {
            const movie = await new ApiClient().get(this.movieId);
            if (!movie)
               return ErrorHandler.displayError('Unexpected error occurred when retrieving movie data');

            loadingIndicator.remove();
            const metaData = document.querySelector('meta');
            metaData.setAttribute('content', `${movie.data.title} movie description page`);
            metaData.setAttribute('title', `SquareEyes — ${movie.data.title}`);
            document.getElementById('movie-title').innerText = movie.data.title;
            document.getElementById('movie-description').innerText = movie.data.description;
            document.getElementById('movie-price').innerText = `${movie.data.price},-`;
            document.getElementById('movie-image').src = movie.data.image.url?.length > 0
                ? movie.data.image.url
                : '';
            document.getElementById('movie-image').alt = movie.data.image.alt?.length > 0
                ? movie.data.image.alt
                : `${movie.data.title} movie cover`;
            
            document.getElementById('hidden-until-loaded').classList.remove('hidden');
        } catch (e) {
            ErrorHandler.displayError(e);
        }
    }
}

const parameters = new URLSearchParams(window.location.search);
const movie = new MovieDetails(parameters.get('id'));
await movie.init();