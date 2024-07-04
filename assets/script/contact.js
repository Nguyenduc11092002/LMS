document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Show the loading spinner
    const spinner = document.getElementById("spinner");
    spinner.style.display = "inline-block";

    // Remove previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (message) {
      message.style.display = "none";
    });

    document.querySelector(".form-error").style.display = "none";

    // Check all required fields
    let formValid = true;
    const requiredFields = document.querySelectorAll("#contactForm [required]");
    requiredFields.forEach(function (field) {
      if (!field.value) {
        formValid = false;
        const errorMessage = field.nextElementSibling;
        errorMessage.style.display = "inline";
      } else if (field.id === "email" && !field.value.endsWith("@gmail.com")) {
        formValid = false;
        const errorMessage = field.nextElementSibling;
        errorMessage.style.display = "inline";
      } else if (
        field.id === "phone" &&
        (isNaN(field.value) || field.value.length !== 10)
      ) {
        formValid = false;
        const errorMessage = field.nextElementSibling;
        errorMessage.style.display = "inline";
      }
    });

    if (!formValid) {
      document.querySelector(".form-error").style.display = "block";
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
    // Function to validate email
    function validateEmail(field) {
      const errorMessage = field.nextElementSibling;
      if (!field.value.endsWith("@gmail.com")) {
        errorMessage.style.display = "inline";
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
    }

    // Function to validate phone
    function validatePhone(field) {
      const errorMessage = field.nextElementSibling;
      if (isNaN(field.value) || field.value.length !== 10) {
        errorMessage.style.display = "inline";
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
    }
    // Add blur event listeners to email and phone fields
    document.getElementById("email").addEventListener("blur", function () {
      validateEmail(this);
    });

    document.getElementById("phone").addEventListener("blur", function () {
      validatePhone(this);
    });

    // Add event listeners to input fields to hide error messages when user starts typing
    const inputFields = document.querySelectorAll(
      "#contactForm input, #contactForm textarea"
    );
    inputFields.forEach(function (field) {
      field.addEventListener("input", function () {
        const errorMessage = field.nextElementSibling;
        errorMessage.style.display = "none";
      });
    });
  });
