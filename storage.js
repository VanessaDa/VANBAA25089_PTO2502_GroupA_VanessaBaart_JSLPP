
const STORAGE_KEY = 'kanban_tasks';

const seedData = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Time to shine", status: "todo" },
  { id: 2, title: "Conquer React 🧠", description: "Component mastery", status: "todo" },
  { id: 3, title: "Master JavaScript 💛", description: "Pro-level coding", status: "doing" },
  { id: 4, title: "Learn Git 🙌", description: "Version control like a boss", status: "doing" },
  { id: 5, title: "Explore ES6 Features 🚀", description: "Arrow functions and more", status: "done" },
  { id: 6, title: "Have fun 🥳", description: "You earned it!", status: "done" }
];

export function loadTasks() {
  let stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return seedData;
  }
  return JSON.parse(stored);
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
export function updateTask(updatedTask) {
  const tasks = loadTasks().map(task =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveTasks(tasks);
}

export function deleteTask(taskId) {
  const tasks = loadTasks().filter(task => task.id !== taskId);
  saveTasks(tasks);
}

export function saveTask(newTask) {
  const tasks = loadTasks();
  tasks.push(newTask);
  saveTasks(tasks);
}




