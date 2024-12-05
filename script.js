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

