document.addEventListener("DOMContentLoaded", function() {
    fetch('./component/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.log('Error loading header:', error));
  });