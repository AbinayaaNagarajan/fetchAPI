import { fetchData, postData } from './api.js';
import { renderGallery } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const loadMoreButton = document.getElementById('load-more');
    const searchForm = document.getElementById('search-form');

    let currentPage = 1;

    async function loadImages(page = 1) {
        const data = await fetchData(page);
        renderGallery(data, galleryContainer);
    }

    loadImages();

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadImages(currentPage);
    });

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('search').value;
        const searchData = await fetchData(1, searchInput);
        renderGallery(searchData, galleryContainer);
    });
});
