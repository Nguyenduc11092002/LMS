/*document.addEventListener("DOMContentLoaded", function() {
    fetch('/component/home-page.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('home-page').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});*/


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