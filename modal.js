// Import storage utility functions for task persistence
import { saveTask, deleteTask, updateTask, loadTasks } from './storage.js';
// Import rendering logic to refresh the task board after changes
import { renderTasks } from './render.js';

/**
 * Sets up modal functionality:
 * - Handles task form submission (create/update)
 * - Adds close button functionality
 * - Enables drag-and-drop repositioning of the modal
 */
export function setupModal() {
  const modal = document.getElementById('task-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const deleteBtn = document.getElementById('delete-task-btn');


  // Close modal when user clicks "X" button
  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  const form = document.getElementById('task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form input values
    const title = form['task-title'].value.trim();
    const description = form['task-desc'].value.trim();
    const status = form['task-status'].value;
    const editingId = modal.dataset.editingId;

    // Prevent creating/updating tasks with empty titles
    if (!title) return;

    // Check for duplicate task titles (excluding the current task in edit mode)
    const allTasks = loadTasks();
    const isDuplicate = allTasks.some(task =>
      task.title.toLowerCase() === title.toLowerCase() &&
      task.id.toString() !== editingId
    );

    if (isDuplicate) {
      alert("A task with this title already exists.");
      return;
    }

    // Construct task object (either new or updated)
    const task = {
      id: editingId ? parseInt(editingId) : Date.now(),
      title,
      description,
      status
    };

    // Save or update the task
    if (editingId) {
      updateTask(task);
    } else {
      saveTask(task);
    }

    // Re-render the task board with latest data
    renderTasks(loadTasks());

    // Reset form and close modal
    form.reset();
    modal.removeAttribute('data-editing-id');
    modal.close();
  });

  // ===== DELETE FUNCTIONALITY =====
deleteBtn.addEventListener('click', () => {
  const taskId = modal.dataset.editingId;
  if (!taskId) return;

  const confirmed = confirm("Are you sure you want to delete this task?");
  if (confirmed) {
    deleteTask(parseInt(taskId));
    renderTasks(loadTasks());
    resetFormState();
    modal.close();
  }
});


  // ===== Modal Dragging Logic =====

  const header = document.querySelector(".modal-header");
  let isDown = false, offsetX = 0, offsetY = 0;

  // Enable drag mode on mouse down
  header.addEventListener("mousedown", (e) => {
    isDown = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    modal.style.position = "absolute";
  });

  // Move modal as the mouse moves
  window.addEventListener("mousemove", (e) => {
    if (isDown) {
      modal.style.left = (e.clientX - offsetX) + "px";
      modal.style.top = (e.clientY - offsetY) + "px";
    }
  });

  // Disable drag mode on mouse up
  window.addEventListener("mouseup", () => {
    isDown = false;
  });

  function resetFormState() {
  form.reset();
  modal.removeAttribute('data-editing-id');
  document.getElementById('submit-task-btn').textContent = 'Create Task';
  deleteBtn.style.display = 'none';
}

}

/**
 * Opens the modal for creating a new task.
 * Clears all input fields and resets modal state.
 */
export function openEmptyModal() {
  const modal = document.getElementById('task-modal');
  document.getElementById('task-title').value = '';
  document.getElementById('task-desc').value = '';
  document.getElementById('task-status').value = 'todo';
  modal.removeAttribute('data-editing-id');
  document.getElementById('submit-task-btn').textContent = 'Create Task';
  modal.showModal();
}

/**
 * Opens the modal pre-filled with task data for editing.
 * Sets form values and assigns the editing ID.
 * @param {Object} task - The task object to be edited
 */
export function openModalForEdit(task) {
  const modal = document.getElementById('task-modal');
  const form = document.getElementById('task-form');

  form['task-title'].value = task.title;
  form['task-desc'].value = task.description;
  form['task-status'].value = task.status;

  modal.dataset.editingId = task.id;
  document.getElementById('submit-task-btn').textContent = 'Update Task';
  modal.showModal();
}