export function renderGallery(images, container) {
    container.innerHTML = '';
    images.forEach((image) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = image.url;
        card.appendChild(img);
        container.appendChild(card);
    });
}
