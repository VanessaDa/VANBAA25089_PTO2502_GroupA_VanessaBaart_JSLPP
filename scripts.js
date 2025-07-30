import { renderTasks } from './render.js';
import { loadTasks } from './storage.js';
import { setupModal, openModalForEdit, openEmptyModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-task-btn').addEventListener('click', openEmptyModal);
  renderTasks(loadTasks());
  setupModal();
});

/**
 * Creates a task card DOM element (title only + click-to-edit).
 * @param {Object} task - The task object with id, title, description, status
 * @returns {HTMLElement} - The DOM element for the task
 */
function createTask(task) {
  const div = document.createElement('div');
  div.classList.add('task-div');
  div.dataset.id = task.id;
  div.textContent = task.title;

  // ✅ Add click event to open modal for editing
  div.addEventListener('click', () => {
    openModalForEdit(task);
  });

  return div;
}

export { createTask };
