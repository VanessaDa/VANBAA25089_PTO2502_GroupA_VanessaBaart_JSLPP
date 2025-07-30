import { createTask } from './scripts.js';

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
  // Clear all task containers
  columns.forEach(column => {
    const container = column.querySelector('.tasks-container');
    container.innerHTML = '';
  });
