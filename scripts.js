// Smooth Scrolling Navigation
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Interactive Skills Visualization
window.addEventListener('scroll', function() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.style.width = bar.getAttribute('data-skill') + '%';
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

// Form Validation for Contact Form
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (email.value === '' || message.value === '') {
    formMessage.textContent = 'Please fill out all fields!';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
  }
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Portfolio Item Modal/Lightbox
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = this.querySelector('img').src;
    caption.innerHTML = this.getAttribute('data-caption');
  });
});

const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
  document.getElementById('modal').style.display = 'none';
}

