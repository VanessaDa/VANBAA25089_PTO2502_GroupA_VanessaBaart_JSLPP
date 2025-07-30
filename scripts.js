import { renderTasks } from './render.js';
import { loadTasks } from './storage.js';
import { setupModal, openModalForEdit, openEmptyModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-task-btn').addEventListener('click', openEmptyModal);
  renderTasks(loadTasks());
  setupModal();
});

