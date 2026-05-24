import { ApiClient } from './apiClient.js';
import { MovieCardRenderer } from './movie-card-renderer.js';
import { ErrorHandler } from './error-handler.js';

class HighestRatedMoviesList {
    async init() {
        try {
            const response = await new ApiClient().get('');
            if (!response)
                return ErrorHandler.displayError();
            
            // Sorted by rating in descending order (highest to lowest), taking the top 4.
            this.sortedMovies = response.data.sort((a, b) => b.rating - a.rating).slice(0, 4);
            setTimeout(() => {
                this.moviesContainer = document.getElementById('movies-container');
                new MovieCardRenderer(this.moviesContainer, this.sortedMovies);
            }, 500)
        } catch (e) {
            ErrorHandler.displayError(e);
        }
    }
}

await new HighestRatedMoviesList().init();