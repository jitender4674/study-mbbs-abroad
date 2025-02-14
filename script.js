'use strict';
document.querySelectorAll(".cta-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelector(".contact-form").scrollIntoView({ behavior: "smooth" });
    });
});




document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;

    if (name === "" || email === "" || phone === "" || country === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Application Submitted Successfully!");
        this.reset();
    }
});


