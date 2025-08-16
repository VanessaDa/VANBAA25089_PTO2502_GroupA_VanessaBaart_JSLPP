// Define the key used to store/retrieve tasks from localStorage
const STORAGE_KEY = 'kanban_tasks';

// Initial set of tasks used to populate localStorage on first load
const seedData = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Time to shine", status: "todo" },
  { id: 2, title: "Conquer React 🧠", description: "Component mastery", status: "todo" },
  { id: 3, title: "Master JavaScript 💛", description: "Pro-level coding", status: "doing" },
  { id: 4, title: "Learn Git 🙌", description: "Version control like a boss", status: "doing" },
  { id: 5, title: "Explore ES6 Features 🚀", description: "Arrow functions and more", status: "done" },
  { id: 6, title: "Have fun 🥳", description: "You earned it!", status: "done" }
];

/**
 * Loads tasks from localStorage.
 * If no tasks are stored yet, seedData is used as the default and saved.
 * @returns {Array} Array of task objects
 */
export function loadTasks() {
  const stored = localStorage.getItem('kanban_tasks');
  return stored ? JSON.parse(stored) : [];
}


/**
 * Saves the entire list of tasks to localStorage.
 * @param {Array} tasks - The array of task objects to store
 */
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Updates an existing task in localStorage based on matching ID.
 * @param {Object} updatedTask - Task object with updated values
 */
export function updateTask(updatedTask) {
  const tasks = loadTasks().map(task =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveTasks(tasks);
}

/**
 * Deletes a task from localStorage using its unique ID.
 * @param {number} taskId - ID of the task to be removed
 */
export function deleteTask(taskId) {
  const tasks = loadTasks().filter(task => task.id !== taskId);
  saveTasks(tasks);
}

/**
 * Adds a new task to localStorage.
 * @param {Object} newTask - A fully formed task object to be added
 */
export function saveTask(newTask) {
  const tasks = loadTasks();
  tasks.push(newTask);
  saveTasks(tasks);
}