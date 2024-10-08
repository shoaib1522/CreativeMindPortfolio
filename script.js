// Toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.style.backgroundColor;

  if (currentTheme === 'black') {
    body.style.backgroundColor = '#eef2f3'; // Light mode
    body.style.color = '#333';
  } else {
    body.style.backgroundColor = 'black'; // Dark mode
    body.style.color = 'white';
  }
}

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.createElement('button');
  themeButton.innerText = 'Toggle Dark Mode';
  themeButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #ffcc29; border: none; border-radius: 5px; cursor: pointer;';

  // Append button to the body
  document.body.appendChild(themeButton);

  // Add event listener to toggle theme
  themeButton.addEventListener('click', toggleTheme);
});
