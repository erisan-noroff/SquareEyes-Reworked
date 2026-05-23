import { ApiClient } from './apiClient.js';
import { MovieCardRenderer } from './movie-card-renderer.js';

class MoviesList {
    async init() {
        try {
            const response = await new ApiClient().get('');
            // Sorted by rating in descending order (highest to lowest).
            this.sortedMovies = response.data.sort((a, b) => b.rating - a.rating);
            setTimeout(() => {
                this.moviesContainer = document.getElementById('movies-container');
                this.movieCardRenderer = new MovieCardRenderer(this.moviesContainer, this.sortedMovies);
            }, 500);
        } catch {
            const loadingIndicator = document.getElementById('loading');
            if (!loadingIndicator) alert('Failed to load movies. Please try to refresh the page.');
            loadingIndicator.textContent = 'Failed to load movies. Please try to refresh the page.';
        }
        
        this.addToggleFilterMenuListener();
    }

    addToggleFilterMenuListener() {
        const filterBtn = document.getElementById('movies-filter-toggle');
        const filterDropdown = document.getElementById('movies-filter-dropdown');

        filterBtn.addEventListener('click', () => {
            const expanded = filterBtn.getAttribute('aria-expanded') === 'true';
            filterBtn.setAttribute('aria-expanded', !expanded);
            filterDropdown.style.display = expanded ? 'none' : 'block';
        });

        filterDropdown.addEventListener('click', (e) => {
            const filterOption = e.target.closest('[data-filter]');
            if(!filterOption)
                return;
            
            const activeBtnClass = 'btn-filter-active';
            const previouslySelectedFilter = document.querySelector(`.${activeBtnClass}`);
            if (previouslySelectedFilter)
                previouslySelectedFilter.classList.remove(activeBtnClass);
            
            filterOption.classList.add(activeBtnClass);
            const selectedFilter = filterOption.getAttribute('data-filter');
            this.movieCardRenderer.movies = selectedFilter === 'none'
                ? this.sortedMovies
                : this.sortedMovies.filter(movie => movie.genre && movie.genre.toLowerCase() === selectedFilter.toLowerCase());
            this.movieCardRenderer.init();
        });
    }
}

await new MoviesList().init();