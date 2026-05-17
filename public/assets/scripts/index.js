import { ApiClient } from './apiClient.js';
import { MovieCardRenderer } from './movie-card-renderer.js';

class HighestRatedMoviesList {
    async init() {
        try {
            const response = await new ApiClient().get('');
            // Sorted by rating in descending order (highest to lowest), taking the top 4.
            this.sortedMovies = response.data.sort((a, b) => b.rating - a.rating).slice(0, 4);
            setTimeout(() => {
                this.moviesContainer = document.getElementById('movies-container');
                new MovieCardRenderer(this.moviesContainer, this.sortedMovies);
            }, 500)
        } catch {
            const loadingIndicator = document.querySelector('#loading');
            if (!loadingIndicator) alert('Failed to load movies. Please try to refresh the page.');
            loadingIndicator.textContent = 'Failed to load movies. Please try to refresh the page.';
        }
    }
}

await new HighestRatedMoviesList().init();