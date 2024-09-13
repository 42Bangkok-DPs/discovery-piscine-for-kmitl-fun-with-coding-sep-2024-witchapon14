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
const categories = [
    {
        title: "Languages",
        items: [
            { name: "Arduino", icon: "cpu" },
            { name: "C", icon: "code" },
            { name: "C++", icon: "code" },
            { name: "JavaScript", icon: "file-text" },
            { name: "Python", icon: "file-text" },
        ]
    },
    {
        title: "Frameworks",
        items: [
            { name: "Flask", icon: "server" },
            { name: "TensorFlow", icon: "grid" },
            { name: "PyTorch", icon: "grid" }
        ]
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: "git-branch" },
            { name: "Linux", icon: "server" },
            { name: "MATLAB", icon: "grid" },
            { name: "MongoDB", icon: "database" }
        ]
    },
    {
        title: "Data Science",
        items: [
            { name: "Pandas", icon: "grid" },
            { name: "OpenCV", icon: "eye" },
            { name: "Scikit-learn", icon: "activity" },
            { name: "Seaborn", icon: "bar-chart-2" }
        ]
    }
];

function createTechIcon(item) {
    return `
        <div class="tech-icon">
            <i data-feather="${item.icon}"></i>
            <span>${item.name}</span>
        </div>
    `;
}

function createCategory(category) {
    return `
        <div class="category">
            <h2>${category.title}</h2>
            <div class="tech-icons">
                ${category.items.map(createTechIcon).join('')}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#tech-stack .grid');
    container.innerHTML = categories.map(createCategory).join('');
    feather.replace();
});


// Function to populate tech stack grid
function populateTechStack() {
    const grid = document.getElementById('tech-stack-grid');
    
    techStack.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${category.category}</h3>
            <p>${category.items.join(', ')}</p>
        `;
        grid.appendChild(div);
    });
}

// Function to create stars
function createStars(type, quantity) {
    const stars = document.getElementById(type);
    for (let i = 0; i < quantity; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 50}s`;
        stars.appendChild(star);
    }
}

// Call the functions when the page loads
window.onload = function() {
    populateTechStack();
    createStars('stars', 50);
    createStars('stars2', 100);
    createStars('stars3', 150);
};