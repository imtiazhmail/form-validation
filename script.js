document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submit

    let name = document.getElementById("name").value.trim(); // get rid of extra spaces
    let email = document.getElementById("email").value.trim(); 
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true; // flag to track overall form validity

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    // Name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    // Phone (must be 11 digits)
    let phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 11 digits";
        valid = false;
    }

    // Password minimum 6 chars
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Minimum 6 characters";
        valid = false;
    }

    // Password match
    if (password !== confirmPassword) {
        document.getElementById("confirmPassError").innerText = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert("Form Submitted Successfully!");
        // this.submit();  <-- if you want real submission later
    }
});
