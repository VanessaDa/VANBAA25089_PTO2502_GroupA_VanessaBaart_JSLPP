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
