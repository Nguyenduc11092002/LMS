// DUC
let slideIndex = 0;
const slidesToShow = 2; // Số lượng slide hiển thị mỗi lần
let slides = document.querySelectorAll('.course');
let totalSlides = slides.length;
let currentIndex = 0;

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  
  for (let i = currentIndex; i < currentIndex + slidesToShow; i++) {
    if (i < totalSlides) {
      slides[i].style.display = 'block';
    }
  }
}

function nextSlide() {
  currentIndex += slidesToShow;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesToShow;
  }
  showSlides();
}

showSlides();

// PHAP
window.addEventListener('load', function() {
    document.querySelector('.hero-content').classList.add('animate');
});

document.addEventListener('DOMContentLoaded', function() {
    const heroStats = document.querySelector('.hero-stats');
    const numbers = document.querySelectorAll('.number');

    // Add animation class to hero-stats on load
    window.addEventListener('load', function() {
        heroStats.classList.add('animate');
        numbers.forEach(number => {
            animateValue(number, 0, parseInt(number.getAttribute('data-target')), 2000);
        });
    });

    // Function to animate numbers
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});