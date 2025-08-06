import { renderTasks } from './render.js';
import { loadTasks, saveTasks } from './storage.js';
import { setupModal, openEmptyModal } from './modal.js';
import { fetchTasksFromAPI } from './api.js';
import { setupSidebarToggle } from './sidebar.js';
import { setupThemeToggle } from './theme.js';

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('add-task-btn').addEventListener('click', openEmptyModal);

  let tasks = loadTasks();

  if (!tasks || tasks.length === 0) {
    try {
      showLoading(); // ⛔️ You need to implement this in render.js
      tasks = await fetchTasksFromAPI();
      saveTasks(tasks);
    } catch (err) {
      showError(err.message); // ⛔️ You also need to implement this in render.js
    }
  }

  renderTasks(tasks);
  setupModal();
  setupSidebarToggle();
  setupThemeToggle();
});
