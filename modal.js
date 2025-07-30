import { saveTask, deleteTask, updateTask, loadTasks } from './storage.js';
import { renderTasks } from './render.js';
export function setupModal() {
  const modal = document.getElementById('task-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  closeBtn.addEventListener('click', () => {
    modal.close();
  });
