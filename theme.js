/**
 * Applies the saved theme from localStorage on page load.
 * If the saved theme is 'dark', it adds the 'dark' class to <body>
 * and sets the toggle switch to checked.
 */
export function applySavedTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('theme-toggle').checked = true;
  }
}

/**
 * Sets up the theme toggle functionality:
 * - Adds event listeners to all theme toggle switches
 * - Updates the <body> class and localStorage when toggled
 * - Keeps multiple toggle switches in sync
 * - Reapplies saved theme on load
 */
export function setupThemeToggle() {
  // Select all toggle inputs with id="theme-toggle" (for desktop and mobile sync)
  const toggles = document.querySelectorAll('#theme-toggle');

  // Add change listener to each toggle switch
  toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;

      // Toggle 'dark' class on body based on toggle state
      document.body.classList.toggle('dark', isDark);

      // Save theme preference in localStorage
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      // Sync all toggle switches to match the one that triggered the event
      toggles.forEach(t => (t.checked = isDark));
    });
  });

  // Apply previously saved theme preference on setup
  applySavedTheme();
}
