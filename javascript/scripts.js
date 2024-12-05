// Smooth scrolling navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust scroll position
      behavior: 'smooth'
    });
  });
});

// Dynamic Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filterCategory = this.getAttribute('data-filter');
    
    projects.forEach(project => {
      if (project.classList.contains(filterCategory) || filterCategory === 'all') {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Theme switcher (Dark/Light mode)
const themeToggleButton = document.querySelector('#theme-toggle');

themeToggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  // Save theme preference in localStorage to persist on page reload
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Portfolio item modal (Lightbox)
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
