document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');

    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

    // Lógica para la galería Lightbox
    const clickableImages = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    if (clickableImages.length > 0) {
        clickableImages.forEach((item, index) => {
            item.addEventListener('click', () => {
                lightbox.style.display = 'block';
                currentIndex = index;
                updateLightboxImage();
            });
        });

        function updateLightboxImage() {
            lightboxImg.src = clickableImages[currentIndex].src;
            captionText.innerHTML = clickableImages[currentIndex].alt;
        };

        function showNextImage() {
            currentIndex = (currentIndex + 1) % clickableImages.length;
            updateLightboxImage();
        };

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + clickableImages.length) % clickableImages.length;
            updateLightboxImage();
        };

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        nextBtn.addEventListener('click', showNextImage);
        prevBtn.addEventListener('click', showPrevImage);
    }
});