// Smooth scrolling navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const filterCategory = this.getAttribute('data-filter');

    projects.forEach(project => {
      const matchesFilter = project.classList.contains(filterCategory) || filterCategory === 'all';
      project.style.display = matchesFilter ? 'block' : 'none';
    });

    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// Theme switcher (Dark/Light mode)
const themeToggleButton = document.querySelector('#theme-toggle');

const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
};

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

themeToggleButton.addEventListener('click', toggleTheme);
applySavedTheme();

// Portfolio item modal (Lightbox)
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('click', function () {
    const modalImage = modal.querySelector('img');
    const sourceImage = this.querySelector('img');

    if (modalImage && sourceImage) {
      modalImage.src = sourceImage.src;
      modal.classList.add('open');
    }
  });
});

const closeModal = () => {
  modal.classList.remove('open');
};

modalCloseButton.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});
