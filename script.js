document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    // Extract fields
    let firstName = form.fname.value.trim();
    let lastName = form.lname.value.trim();
    let username = form.username.value.trim();
    let email = form.email.value.trim();
    let file = form.profile_pic.files[0];

    // Validation rules
    // date of birth validation
    document.querySelector("input[name='dob']").max =
        new Date().toISOString().split("T")[0];
    // set min to 100 years ago from today
    let minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    document.querySelector("input[name='dob']").min = minDate.toISOString().split("T")[0];

    if (!/^[A-Za-z]+$/.test(firstName)) {
        alert("First name must contain only alphabets (no digits or spaces).");
        return;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
        alert("Last name must contain only alphabets (no digits or spaces).");
        return;
    }

    if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) {
        alert("Username must be 3–16 characters long, contain only letters, digits, or underscores, and no spaces.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format!");
        return;
    }

    if (file && file.size > 2 * 1024 * 1024) {
        alert("Profile picture must be under 2MB!");
        return;
    }

    // Send AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("response").innerHTML = xhr.responseText;
            form.reset();
        } else {
            document.getElementById("response").innerHTML =
                "<span style='color:red;'>An error occurred while submitting the form.</span>";
        }
    };

    xhr.onerror = function () {
        document.getElementById("response").innerHTML =
            "<span style='color:red;'>Connection error. Please try again.</span>";
    };

    xhr.send(formData);
});
