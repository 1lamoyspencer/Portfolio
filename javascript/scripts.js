// 1. Smooth Scrolling Navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust scroll position for fixed header
      behavior: 'smooth'
    });
  });
});

// 2. Interactive Skills Visualization
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
  const percent = bar.getAttribute('data-percent');
  bar.style.width = percent;
  bar.style.transition = 'width 2s ease-out';  // Smooth animation for skill bar
});

// 3. Form Validation for Contact Form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(e) {
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (!email || !message) {
    e.preventDefault();
    alert("Please fill in both fields before submitting!");
  }
});

// 4. Custom Cursor
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX - 10}px`;
  customCursor.style.top = `${e.pageY - 10}px`;
});

document.querySelectorAll('a, button').forEach(item => {
  item.addEventListener('mouseenter', () => {
    customCursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hover');
  });
});

// 5. Portfolio Item Modal (Lightbox)
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('click', function() {
    const modalImage = modal.querySelector('img');
    modalImage.src = this.querySelector('img').src;
    modal.classList.add('open');
  });
});

modalCloseButton.addEventListener('click', function() {
  modal.classList.remove('open');
});

// 6. Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('#loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});

// 7. Typing Effect for Headlines
const typingElement = document.querySelector('#typing-effect');
const textToType = "Welcome to my Portfolio!";
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// 8. Interactive Timeline for Experience/Education
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});
