// Get canvas element
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create array for stars
const stars = [];

// Number of stars
const numStars = 200;

// Initialize stars
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 2 + 0.5
    });
}

// Function to animate stars
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'; // Neon blue color with some transparency
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)'; // Neon blue color with some transparency
    ctx.lineWidth = 1;

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Move star
        star.y += star.speed;

        // Reset star if it goes off screen
        if (star.y > canvas.height) {
            star.y = -star.size;
            star.x = Math.random() * canvas.width;
            star.size = Math.random() * 2;
            star.speed = Math.random() * 2 + 0.5;
        }
    });

    requestAnimationFrame(animateStars);
}

// Start animation
animateStars();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});