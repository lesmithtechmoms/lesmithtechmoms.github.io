// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted:", { name, email, message });

    // Reset form
    document.getElementById("contact-form").reset();

    alert("Thank you for reaching out! We'll get back to you soon.");
});








