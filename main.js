document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle functionality
  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelector('.nav-links')

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('nav-active')
    })
  }

  // Handle Contact Form Submission
  const contactForm = document.getElementById('contactForm')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()
      alert(
        'Thank you for contacting Pascal Technologies. Your enquiry has been received.',
      )
      contactForm.reset()
    })
  }
})
