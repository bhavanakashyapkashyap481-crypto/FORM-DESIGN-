function validateForm() {

    // Get values
    var name = document.forms["myForm"]["fullname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var gender = document.querySelector('input[name="gender"]:checked');

    // Name validation
    if (name === "") {
        alert("Please enter your full name");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Gender validation
    if (gender === null) {
        alert("Please select your gender");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}
