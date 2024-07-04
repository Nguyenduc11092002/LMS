document.addEventListener("DOMContentLoaded", function() {
    fetch('/component/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

function redirectToGoogle() {
    const address = encodeURIComponent("The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.");
    const googleMapsUrl = `https://www.google.com/maps/search/${address}`;
    window.location.href = googleMapsUrl;
}