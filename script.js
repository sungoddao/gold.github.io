const container = document.querySelector('.rain-container');
const words = ['DOG', 'GO', 'TO', 'THE', 'MOON', 'DOG', 'GO', 'TO', 'THE', 'MOON'];
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6', '#33FFD5'];

function createWord() {
    const word = document.createElement('span');
    word.classList.add('word');
    word.innerText = words[Math.floor(Math.random() * words.length)];
    word.style.left = `${Math.random() * 100}vw`;
    word.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3 to 5 seconds
    word.style.color = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(word);

    setTimeout(() => {
        word.remove();
    }, 5000); // Remove after falling animation
}

setInterval(createWord, 500); // Create a new word every 500ms

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slider-wrapper');
    const totalSlides = document.querySelectorAll('.slider-content').length;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    slideIndex = (slideIndex + 1) % totalSlides;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds