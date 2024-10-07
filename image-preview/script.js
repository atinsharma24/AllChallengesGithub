let currentIndex = 0;
let images = [];

// Fetch images from the server
fetch('/images-list')
    .then(response => response.json())
    .then(data => {
        images = data;
        updateBackground();
    })
    .catch(error => console.error('Error fetching images:', error));

// Function to update background image
function updateBackground() {
    if (images.length === 0) return;
    const imageUrl = `images/${images[currentIndex]}`;
    document.getElementById('imagePreview').style.backgroundImage = `url(${imageUrl})`;
}

// Handle Next Background button click
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle backward
    updateBackground();
});
