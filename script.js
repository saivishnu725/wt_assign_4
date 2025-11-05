document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    // Extract fields
    let firstName = form.first_name.value.trim();
    let lastName = form.last_name.value.trim();
    let username = form.username.value.trim();
    let email = form.email.value.trim();
    let file = form.profile_pic.files[0];

    // Validation rules
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
    fetch("register.php", {
        method: "POST",
        body: formData
    })
        .then(res => res.text())
        .then(data => {
            document.getElementById("response").innerHTML = data;
            form.reset();
        })
        .catch(err => console.error(err));
});
