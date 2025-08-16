# **Kanban Board: Portfolio Piece**

## 💡 Project Overview

This project is a fully functional, responsive **Kanban board** web application designed to help users visualize and manage their workflow. It features a responsive layout that adapts to various screen sizes, organizing tasks into **TODO**, **DOING**, and **DONE** columns.

Building on a static visual base, this version introduces a robust **JavaScript-driven** system for dynamic task display and interactive management:

- Fetches initial tasks from an **API** and persists updates in **Local Storage**
- Modal-based **Create / Read / Update / Delete** (CRUD) for tasks
- **Mobile-friendly menu** from the app logo with theme toggle
- **Dark/Light** theme with persistence

This project showcases **modular JS architecture**, **clean DOM manipulation**, and **solid UX** for a professional, scalable implementation.

---

## 🚀 Live Demo & Presentation

- **Live Demo (Netlify)**: _add your link_
- **Presentation**: _add your link_
- **GitHub Repository**: https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSLPP.git

---

## 🌟 Key Features

### Core Functionality

- **API-First Initial Data**: On first load, tasks are fetched from `https://jsl-kanban-api.vercel.app/` and then saved to Local Storage. If the API is unavailable on first run, a starter set is used as a fallback so the app remains usable.
- **Persistent Data**: All user changes (add/edit/delete) are saved to **Local Storage**, so your board is restored on reload.
- **Dynamic Task Rendering**: Tasks are generated from data (not hard-coded HTML) and automatically displayed in the correct columns with live counters.
- **Interactive Modal-Based Management**:
  - **Add New Task**: Create tasks with title, description, and status.
  - **Edit Task**: Click any task to open it pre-filled for editing.
  - **Delete Task**: Delete within the edit modal (with confirmation).
  - **Backdrop**: The UI dims behind the modal to focus attention.
- **Loading & Error States**:
  - **Visible Loading** while fetching (overlay + column loaders for empty board).
  - **Clear Error** message if fetching fails (banner when data already exists, inline error when empty).
- **(Optional) Task Priority**: A priority indicator dot can be added to cards (planned/stretch goal).

### User Interface & Navigation

- **Fully Responsive**: The layout adapts from desktop to mobile; columns reflow gracefully.
- **Light & Dark Mode**: Theme toggle in the sidebar/mobile menu, persisted via Local Storage.
- **Desktop Sidebar**: Persistent navigation with board title and theme toggle.
- **Mobile Menu from App Logo**: Tap the header logo to open/close the mobile menu with the **same controls** as the desktop sidebar.
- **Custom Form Validation**: Required fields guide the user with clear feedback.
- **Clear Close Button**: Prominent red “X” closes modals.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure & accessibility
- **CSS3** – Responsive layout (Flexbox/Grid), CSS Variables for theming
- **JavaScript (ES6+)** – Modular architecture, DOM manipulation, events
  - **Fetch API** – Initial data from remote source
  - **Web Storage (Local Storage)** – Persistent tasks & theme
  - **JSDoc** – Major functions documented for clarity
- **Google Fonts** – “Plus Jakarta Sans”
- **Netlify** – Hosting & deployment
- **Figma** – UI reference

---

## 📋 Interaction Instructions

### Adding a New Task

1. Click **“+ Add Task”** in the header.
2. Enter **Title**, optional **Description**, and select **Status**.
3. Click **Create Task** to add it to the board.

### Editing an Existing Task

1. Click any **task card**.
2. Update fields as needed.
3. Click **Save Changes**.

### Deleting a Task

1. Open a task (click the card).
2. Click **Delete Task** and confirm.

### Closing Modals

- Click the **red “X”** in the top-right corner.

---

## 💻 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSLPP.git
   cd VANBAA25089_PTO2502_GroupA_VanessaBaart_JSLPP
   ```

2. **Open the project**

   - Open `index.html` directly in your browser, **or**
   - Use a local server (recommended for smooth API fetch):
     ```bash
     npx live-server
     ```

3. **Run the app**
   - Visit the Netlify link (if deployed), or your local server URL (e.g. `http://127.0.0.1:5500`).

---

## 🖥️ Working Usage Examples

### Desktop View

- Open `index.html` in a desktop browser.
- **Sidebar** and **Kanban columns** are fully visible.
- Click **“+ Add Task”** to create a task.
- Click any card to **edit** or **delete**.
- Use the **theme toggle** in the sidebar to switch themes.
- Resize the window to see responsive behavior.

### Mobile View

- Open on a mobile device or use devtools mobile emulation.
- The desktop sidebar hides; tap the **app logo** to open the **mobile menu** (with theme toggle).
- Kanban columns stack vertically for easy scrolling.
- Modals are **touch-friendly** and responsive.

---

## 📂 Project Structure

```
JSLPP/
├── assets/           # Logos and icons
├── index.html        # Markup structure
├── styles.css        # Responsive and theme styling
├── scripts.js        # Entry point + app init
├── api.js            # Fetch logic from remote API
├── render.js         # Task rendering & UI helpers
├── storage.js        # Local Storage helpers
├── modal.js          # Add/Edit/Delete task modal
├── sidebar.js        # Sidebar/mobile menu toggles
├── theme.js          # Light/Dark mode toggle
└── README.md         # Project documentation
```

---

## ✅ Notes for Assessors

- **Initial Data**: API-first fetch with Local Storage persistence. If the first fetch fails and there’s no local data, a one-time **seed fallback** loads so the board remains usable.
- **Loading & Errors**: Always shows a **loading state** during fetch; shows **error banner** when fetch fails but local data exists, and **inline error** if the board is empty.
