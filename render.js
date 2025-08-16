import { openModalForEdit } from './modal.js';

/**
 * Creates a single task card element for the board.
 * @param {Object} task - The task object
 * @returns {HTMLElement} The task DOM element
 */
export function createTask(task) {
  const div = document.createElement('div');
  div.classList.add('task-div');
  div.dataset.id = task.id;
  div.textContent = task.title;

  div.addEventListener('click', () => {
    openModalForEdit(task);
  });

  return div;
}

/**
 * Renders all tasks into their respective columns on the board.
 * @param {Array} tasks - Array of task objects
 */
export function renderTasks(tasks) {
  const columns = document.querySelectorAll('.column-div');

  // Clear all task containers
  columns.forEach(column => {
    const container = column.querySelector('.tasks-container');
    container.innerHTML = '';
  });

  // Render each task into the correct column
  tasks.forEach(task => {
    const column = document.querySelector(`.column-div[data-status="${task.status}"] .tasks-container`);
    if (column) {
      const taskEl = createTask(task);
      column.appendChild(taskEl);
    }
  });

  // Update column counts
  const statusCounts = {
    todo: tasks.filter(t => t.status === 'todo').length,
    doing: tasks.filter(t => t.status === 'doing').length,
    done: tasks.filter(t => t.status === 'done').length,
  };

  document.getElementById('toDoText').textContent = `TODO (${statusCounts.todo})`;
  document.getElementById('doingText').textContent = `DOING (${statusCounts.doing})`;
  document.getElementById('doneText').textContent = `DONE (${statusCounts.done})`;
}

/**
 * Displays a loading message in each column container
 */
export function showLoading() {
  const spinnerHTML = `
    <div class="loading-spinner">
      <div class="spinner-circle"></div>
      <p>Loading tasks...</p>
    </div>
  `;
  document.querySelectorAll('.tasks-container').forEach(container => {
    container.innerHTML = spinnerHTML;
  });
}


/**
 * Displays an error message in each column container
 * @param {string} message - Error message to show
 */
export function showError(message) {
  const containers = document.querySelectorAll('.tasks-container');
  containers.forEach(container => {
    container.innerHTML = `<p style="text-align:center; color: red;">⚠️ ${message}</p>`;
  });
}
// A non-destructive loading overlay (doesn't wipe task lists)
export function showBoardLoading() {
  if (document.querySelector('.board-loader')) return;
  const overlay = document.createElement('div');
  overlay.className = 'board-loader';
  overlay.innerHTML = `
    <div class="board-loader__content">
      <div class="board-loader__spinner"></div>
      <p>Loading tasks…</p>
    </div>
  `;
  document.getElementById('layout').appendChild(overlay);
}

export function hideBoardLoading() {
  document.querySelector('.board-loader')?.remove();
}

// A non-destructive error banner for when fetch fails but we already have tasks
export function showErrorBanner(message = 'Failed to refresh tasks') {
  const banner = document.createElement('div');
  banner.className = 'error-banner';
  banner.textContent = `⚠️ ${message}`;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add('visible'));
  setTimeout(() => banner.classList.remove('visible'), 2500);
  setTimeout(() => banner.remove(), 3000);
}
