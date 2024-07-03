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