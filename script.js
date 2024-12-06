// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
// Check if there's a stored theme preference
const storedTheme = localStorage.getItem('theme');
// Apply the stored theme on page load
if (storedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '🌞'; 
} else {
  body.classList.remove('dark-mode');
  themeToggle.textContent = '🌙'; 
}
// Toggle the theme on button click
themeToggle.addEventListener('click', () => {
  console.log('Theme toggle clicked!');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙'; 
    localStorage.setItem('theme', 'light'); 
  } else {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌞'; 
    localStorage.setItem('theme', 'dark'); 
  }
});

// Initialize Email.js with your User ID
emailjs.init('qOmSIHRXAJSIGcOc3');

// Contact Form Submission using email.js
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Email.js service
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Send email via Email.js
    emailjs.send("service_yzmviup", "template_3bi1p7r", templateParams)
        .then(function(response) {
            console.log("Success:", response);
            alert("Message sent successfully!");
        }, function(error) {
            console.log("Error:", error);
            alert("Failed to send message. Please try again.");
        });
});
