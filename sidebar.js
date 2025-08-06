
/**
 * Sets up sidebar toggle functionality for desktop and mobile
 */
export function setupSidebarToggle() {
  const sidebar = document.querySelector('.sidebar');
  const hideBtn = document.getElementById('hide-sidebar-btn');
  const logoMobile = document.querySelector('.logo-mobile');

  // Create 'Show Sidebar' button for desktop
  const showSidebarBtn = document.createElement('button');
  showSidebarBtn.id = 'show-sidebar-btn';
  showSidebarBtn.classList.add('show-sidebar');
  showSidebarBtn.innerHTML = '<img src="./assets/icon-show-sidebar.svg" alt="Show Sidebar" />';
  document.body.appendChild(showSidebarBtn);

   // Toggle sidebar visibility on desktop
  hideBtn.addEventListener('click', () => {
    document.body.classList.add('sidebar-hidden');
    showSidebarBtn.style.display = 'flex';
  });

  showSidebarBtn.addEventListener('click', () => {
    document.body.classList.remove('sidebar-hidden');
    showSidebarBtn.style.display = 'none';
  });

  