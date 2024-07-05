document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.querySelector('.grid-button');
    const listButton = document.querySelector('.list-button');
    const courseCards = document.querySelector('.course-cards');
    const courseCard1 = document.querySelector('.course-cards-1');
    const pageButtons = document.querySelectorAll('.page-num');
    const nextButton = document.querySelector('.page-num i');

    gridButton.addEventListener('click', function () {
        gridButton.classList.add('active');
        listButton.classList.remove('active');
        courseCards.style.display = 'flex';
        courseCard1.style.display = 'none';
    });

    listButton.addEventListener('click', function () {
        listButton.classList.add('active');
        gridButton.classList.remove('active');
        courseCards.style.display = 'none';
        courseCard1.style.display = 'block';
    });

    pageButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (!button.classList.contains('active')) {
                pageButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            }
        });
    });

    nextButton.addEventListener('click', function () {
        const activeButton = document.querySelector('.page-num.active');
        const nextPageButton = activeButton.nextElementSibling;
        if (nextPageButton && nextPageButton.classList.contains('page-num')) {
            activeButton.classList.remove('active');
            pageButtons.classList.add('active');
        }
    });
});
