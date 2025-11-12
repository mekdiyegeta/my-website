// ===== welcome.js =====
document.addEventListener("DOMContentLoaded", () => {
  // Check if we are on the contact page
  if (document.body.classList.contains('theme-contact')) {
    // Display a welcome message
    alert(" 👋 Hello! Welcome to my Contact Page! Drop me a message anytime 💬✨.");

    // OR you can display it in-page instead of an alert
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = "Welcome to the Contact Page! Feel free to reach out.";
    welcomeDiv.style.padding = "10px";
    welcomeDiv.style.backgroundColor = "#f0f8ff";
    welcomeDiv.style.color = "#333";
    welcomeDiv.style.textAlign = "center";
    welcomeDiv.style.fontWeight = "bold";
    welcomeDiv.style.marginBottom = "20px";
    
    // Insert at the top of the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.parentNode.insertBefore(welcomeDiv, contactForm);
    }
  }
});



