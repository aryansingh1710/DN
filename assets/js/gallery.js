document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-grid');

    const galleryImages = [
        // Using placeholders as requested since local images might not exist, 
        // but structure matches the request. 
        // Ideally these paths would be valid.
        { src: "assets/images/tanjiro.jpg", alt: "Tanjiro Battle Stance" },
        { src: "assets/images/nezuko.jpg", alt: "Nezuko Demon Form" },
        { src: "assets/images/rengoku.jpg", alt: "Rengoku Flame Breathing" },
        { src: "assets/images/hashira.jpg", alt: "Hashira Lineup" }
    ];

    if (galleryContainer) {
        galleryImages.forEach(imgData => {
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('gallery-item');

            // Using a colored placeholder div if image fails to load or just to show structure
            // But implementing exactly as requested:
            imgWrapper.innerHTML = `
                <img src="${imgData.src}" alt="${imgData.alt}" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                <p style="text-align: center; margin-top: 0.5rem; color: #ccc;">${imgData.alt}</p>
            `;
            galleryContainer.appendChild(imgWrapper);
        });
    }
});
