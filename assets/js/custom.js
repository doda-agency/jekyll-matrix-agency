// Custom JavaScript for agency website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  if (window.Tabler) {
    window.Tabler.init();
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize any other custom functionality
  initializeContactForm();
});

// Contact form handling
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real implementation, you would send the form data to a server
      // For now, we'll just show a success message
      const formData = new FormData(contactForm);
      let formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      console.log('Form submitted:', formValues);
      
      // Show success message
      const formFooter = contactForm.querySelector('.form-footer');
      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success mt-3';
      successMessage.textContent = 'Message sent successfully!';
      
      formFooter.appendChild(successMessage);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
  }
}