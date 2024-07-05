document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const spinner = document.getElementById("spinner");
  const formError = document.querySelector(".form-error");

  const requiredFields = document.querySelectorAll("#contactForm [required]");

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const nameRegex = /^[A-Za-z\s]+$/;

  // Function to validate individual field
  function validateField(field) {
    let valid = true;
    const errorMessage = field.nextElementSibling;

    if (!field.value) {
      valid = false;
    } else if (field.id === "email" && !emailRegex.test(field.value)) {
      valid = false;
    } else if (field.id === "phone" && !phoneRegex.test(field.value)) {
      valid = false;
    } else if (field.id === "name" && !nameRegex.test(field.value)) {
      valid = false;
    }

    if (!valid) {
      errorMessage.style.display = "inline";
    } else {
      errorMessage.style.display = "none";
    }

    return valid;
  }

  // Add input event listeners for real-time validation
  requiredFields.forEach(function (field) {
    field.addEventListener("input", function () {
      validateField(field);
    });
  });

  // Form submit event listener
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Show the loading spinner
    spinner.style.display = "inline-block";

    // Remove previous error messages
    formError.style.display = "none";

    // Validate all fields
    let formValid = true;
    requiredFields.forEach(function (field) {
      if (!validateField(field)) {
        formValid = false;
      }
    });

    if (!formValid) {
      formError.style.display = "block";
      spinner.style.display = "none"; // Hide spinner if form is invalid
    } else {
      // Simulate form submission delay
      setTimeout(() => {
        // Collect form data
        const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          message: document.getElementById("message").value,
        };

        // Display form data
        alert(
          `Form Data:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
        );

        spinner.style.display = "none"; // Hide spinner after form submission
      }, 1000); // Simulate a 1-second delay for form submission
    }
  });
});