document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    // Client-side validation
    let email = form.email.value;
    let username = form.username.value;
    let file = form.profile_pic.files[0];

    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
        alert("Username must be 3-16 characters long and contain only letters, numbers, or underscores.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format!");
        return;
    }
    if (file && file.size > 2 * 1024 * 1024) {
        alert("File size must be under 2MB!");
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
