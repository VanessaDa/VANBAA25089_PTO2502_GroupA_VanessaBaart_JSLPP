// Import storage utility functions for task persistence
import { saveTask, deleteTask, updateTask, loadTasks } from './storage.js';
// Import rendering logic to refresh the task board after changes
import { renderTasks } from './render.js';

/**
 * Sets up modal functionality:
 * - Handles task form submission (create/update)
 * - Adds close button functionality
 * - Enables drag-and-drop repositioning of the modal
 * - Handles delete button logic
 */
export function setupModal() {
  const modal = document.getElementById('task-modal');
  const form = document.getElementById('task-form');
  const closeBtn = document.getElementById('close-modal-btn');
  const deleteBtn = document.getElementById('delete-task-btn');

  // ===== CLOSE MODAL =====
  closeBtn.addEventListener('click', () => {
    modal.close();
    resetFormState();
  });

  // ===== FORM SUBMISSION =====
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = form['task-title'].value.trim();
    const description = form['task-desc'].value.trim();
    const status = form['task-status'].value;
    const editingId = modal.dataset.editingId;

    if (!title) return;

    const allTasks = loadTasks();
    const isDuplicate = allTasks.some(task =>
      task.title.toLowerCase() === title.toLowerCase() &&
      task.id.toString() !== editingId
    );

    if (isDuplicate) {
      alert("A task with this title already exists.");
      return;
    }

    const task = {
      id: editingId ? parseInt(editingId) : Date.now(),
      title,
      description,
      status
    };

    if (editingId) {
      updateTask(task);
    } else {
      saveTask(task);
    }

    renderTasks(loadTasks());
    resetFormState();
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

  // ===== DRAGGABLE MODAL =====
  const header = document.querySelector(".modal-header");
  let isDown = false, offsetX = 0, offsetY = 0;

  header.addEventListener("mousedown", (e) => {
    isDown = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    modal.style.position = "absolute";
  });

  window.addEventListener("mousemove", (e) => {
    if (isDown) {
      modal.style.left = (e.clientX - offsetX) + "px";
      modal.style.top = (e.clientY - offsetY) + "px";
    }
  });

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
 */
export function openEmptyModal() {
  const modal = document.getElementById('task-modal');
  const form = document.getElementById('task-form');
  const deleteBtn = document.getElementById('delete-task-btn');

  form.reset();
  modal.removeAttribute('data-editing-id');
  document.getElementById('submit-task-btn').textContent = 'Create Task';
  deleteBtn.style.display = 'none';
  modal.showModal();
}

/**
 * Opens the modal for editing an existing task.
 * @param {Object} task - The task to edit
 */
export function openModalForEdit(task) {
  const modal = document.getElementById('task-modal');
  const form = document.getElementById('task-form');
  const deleteBtn = document.getElementById('delete-task-btn');

  form['task-title'].value = task.title;
  form['task-desc'].value = task.description;
  form['task-status'].value = task.status;

  modal.dataset.editingId = task.id;
  document.getElementById('submit-task-btn').textContent = 'Update Task';
  deleteBtn.style.display = 'inline-block';
  modal.showModal();
}

