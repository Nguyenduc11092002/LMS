// let currentIndex = 0;
// const coursesContent = document.querySelector('.courses__content');
// const courses = document.querySelectorAll('.course');
// const totalCourses = courses.length;
// const coursesPerView = 2;

// function updateSlider() {
//   const offset = -(currentIndex * 50); // 50% cho mỗi slide
//   coursesContent.style.transform = `translateX(${offset}%)`;
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     currentIndex -= 1;
//   } else {
//     currentIndex = totalCourses - coursesPerView;
//   }
//   updateSlider();
// }

// function nextSlide() {
//   if (currentIndex < totalCourses - coursesPerView) {
//     currentIndex += 1;
//   } else {
//     currentIndex = 0;
//   }
//   updateSlider();
// }

// updateSlider();

let currentIndex = 0;
const coursesContent = document.querySelector('.courses__content');
const courses = document.querySelectorAll('.course');
const totalCourses = courses.length;
const coursesPerView = 2;

function updateSlider() {
  const offset = -(currentIndex * 100 / coursesPerView); // 50% cho mỗi slide
  coursesContent.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 1;
  } else {
    currentIndex = totalCourses - coursesPerView;
  }
  updateSlider();
}

function nextSlide() {
  if (currentIndex < totalCourses - coursesPerView) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

updateSlider();
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