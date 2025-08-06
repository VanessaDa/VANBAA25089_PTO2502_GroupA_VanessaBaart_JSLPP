// api.js

/**
 * Fetch tasks from remote Kanban API
 * @returns {Promise<Array>} - List of tasks
 * @throws {Error} - If the fetch fails
 */
export async function fetchTasksFromAPI() {
  const endpoint = 'https://jsl-kanban-api.vercel.app/';
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks from API");
  }

  return await response.json();
}
