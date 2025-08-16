import { renderTasks, showLoading, showError, showBoardLoading, hideBoardLoading, showErrorBanner } from './render.js';
import { loadTasks, saveTasks } from './storage.js';
import { setupModal, openEmptyModal } from './modal.js';
import { fetchTasksFromAPI } from './api.js';
import { setupSidebarToggle } from './sidebar.js';
import { setupThemeToggle } from './theme.js';

// ✅ Seed used ONLY if the first API fetch fails (fallback)
const SEED_DATA = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Time to shine", status: "todo" },
  { id: 2, title: "Conquer React 🧠", description: "Component mastery", status: "todo" },
  { id: 3, title: "Master JavaScript 💛", description: "Pro-level coding", status: "doing" },
  { id: 4, title: "Learn Git 🙌", description: "Version control like a boss", status: "doing" },
  { id: 5, title: "Explore ES6 Features 🚀", description: "Arrow functions and more", status: "done" },
  { id: 6, title: "Have fun 🥳", description: "You earned it!", status: "done" }
];

// Prefer local edits; add only new API tasks by id
function mergeTasks(local = [], remote = []) {
  const byId = new Map(local.map(t => [t.id, t]));
  for (const t of remote) if (!byId.has(t.id)) byId.set(t.id, t);
  return Array.from(byId.values());
}

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('add-task-btn').addEventListener('click', openEmptyModal);

  // 1) Render whatever is already saved locally (fast)
  let localTasks = loadTasks();
  const hadLocal = Array.isArray(localTasks) && localTasks.length > 0;
  if (hadLocal) renderTasks(localTasks);

  // 2) Fetch latest in the background (API-first), with clear loading & error UX
  try {
    // Always show a non-destructive overlay while fetching
    showBoardLoading();

    // If the board is empty, also show per-column loaders
    if (!hadLocal) {
      showLoading();
      await new Promise(r => setTimeout(r, 300)); // let the browser paint the spinner
    }

    const remote = await fetchTasksFromAPI();     // GET https://jsl-kanban-api.vercel.app/
    const merged = mergeTasks(loadTasks(), remote);
    saveTasks(merged);
    renderTasks(merged);
  } catch (err) {
    if (hadLocal) {
      // Keep existing tasks on screen; just notify
      showErrorBanner(err.message || 'Failed to fetch tasks');
    } else {
      // Nothing to show yet: display in-column error, then seed once so app is usable
      showError(err.message || 'Failed to fetch tasks');
      await new Promise(r => setTimeout(r, 600));
      saveTasks(SEED_DATA);
      renderTasks(SEED_DATA);
    }
    console.error('Fetch failed; using existing/seed tasks.', err);
  } finally {
    hideBoardLoading(); // always remove overlay
  }

  setupModal();
  setupSidebarToggle();
  setupThemeToggle();
});