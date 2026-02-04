const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainContent = document.getElementById('main-content');
const successMessage = document.getElementById('success-message');
const heartsContainer = document.getElementById('hearts-container');

function moveNoButton() {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton); 

yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    successMessage.style.display = 'block';
    heartsContainer.style.display = 'block';
    createHearts();
});

// New function to handle trip selection
function selectTrip(location) {
    alert("Yay! I can't wait to go to " + location + " with you! ❤️");
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        heart.style.fontSize = Math.random() * 20 + 20 + 'px'; 
        
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300); 
}
