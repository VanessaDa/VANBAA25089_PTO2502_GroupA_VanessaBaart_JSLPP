
import { saveTask, deleteTask, updateTask, loadTasks } from './storage.js';
import { renderTasks } from './render.js';

export function setupModal() {
  const modal = document.getElementById('task-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  closeBtn.addEventListener('click', () => {
    modal.close();
  });



  const form = document.getElementById('task-form');
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
    form.reset();
    modal.removeAttribute('data-editing-id');
    modal.close();
  });

  // Drag to move
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
}

export function openEmptyModal() {
  const modal = document.getElementById('task-modal');
  document.getElementById('task-title').value = '';
  document.getElementById('task-desc').value = '';
  document.getElementById('task-status').value = 'todo';
  modal.removeAttribute('data-editing-id');
  document.getElementById('submit-task-btn').textContent = 'Create Task';
  modal.showModal();
}

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
