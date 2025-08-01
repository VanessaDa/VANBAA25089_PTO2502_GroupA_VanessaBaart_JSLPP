// Import required functions from local modules
import { renderTasks } from './render.js';
import { loadTasks } from './storage.js';
import { setupModal, openModalForEdit, openEmptyModal } from './modal.js';

/**
 * Initialise the app once the DOM is fully loaded.
 * - Adds event listener to the "Add Task" button
 * - Loads tasks from localStorage and renders them
 * - Sets up modal functionality (submit, drag, close, etc.)
 */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-task-btn').addEventListener('click', openEmptyModal);
  renderTasks(loadTasks());
  setupModal();
});

/**
 * Creates a single task card element to be displayed in the UI.
 * Each card:
 * - Shows the task title
 * - Stores task ID in a dataset attribute
 * - Opens modal for editing when clicked
 *
 * @param {Object} task - The task object with properties: id, title, description, status
 * @returns {HTMLElement} - The DOM element representing the task card
 */
function createTask(task) {
  const div = document.createElement('div');
  div.classList.add('task-div');
  div.dataset.id = task.id;
  div.textContent = task.title;

  // Attach click event to open modal pre-filled with this task's data
  div.addEventListener('click', () => {
    openModalForEdit(task);
  });

  return div;
}

// Export the task creation utility for use in render.js
export { createTask };
