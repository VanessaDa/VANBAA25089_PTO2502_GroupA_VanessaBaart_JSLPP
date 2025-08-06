# 🧩 JSL Portfolio Piece: Kanban App Deployment & Features Implementation

## 📝 Overview

This project showcases a fully responsive **Kanban task board app** built with **vanilla HTML, CSS, and JavaScript**. It aligns with the provided Figma design and satisfies all JSLPP project user stories. The application is modular, well-documented, and persistently stores tasks using `localStorage`.

It also dynamically fetches initial tasks from an external API, supports CRUD operations on tasks via a modal, includes responsive sidebar behavior, and features a theme toggle for light/dark mode.

---

## 🌐 Deployment & Submission Links

- 🔗 **Deployed App (Netlify)**:
- 🎥 **Recorded Presentation**:
- 🗃️ **GitHub Repository**: https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSLPP.git

---

## ✅ Key Objectives Covered

### 🚀 Deployment & Hosting

- Prepared and structured the project for Netlify deployment.
- Deployed with a custom subdomain.
- Live version tested — all tasks persist and reflect across sessions.

### 🌐 Initial Data Fetching & Loading State

- Fetches initial tasks from: `https://jsl-kanban-api.vercel.app/`
- Shows a "Loading tasks..." message while fetching.
- Displays an error message if fetch fails.
- Fetched tasks are stored in `localStorage`.

### 💾 Data Persistence

- Tasks persist in `localStorage` after fetch or user creation.
- Upon reload, tasks display in the correct columns ("To Do", "Doing", "Done").

### 📝 Task Editing & Deletion

- Modal supports:
  - Title, description, and status editing
  - Duplicate title validation
- Delete button shows a confirmation prompt.
- Deleted tasks are removed from both the UI and `localStorage`.

### 📚 Sidebar Interaction

- Sidebar includes:
  - Board title
  - Logo (light/dark)
  - Theme toggle
  - Hide button (desktop)
- Toggleable via “Hide” or “Show Sidebar” buttons.
- Mobile menu opens from the logo and includes all sidebar content.

### 📱 Mobile Sidebar (Menu)

- Fully functional mobile sidebar accessible from the header.
- Theme toggle is present.
- Sidebar can be closed for task viewing.

### 🎨 Theme Toggle (Dark/Light Mode)

- Toggle switch available on desktop and mobile.
- Dark mode properly applies styles across the entire UI.
- Mode preference is saved and persists on reload.

### 💡 Stretch Goal (Priority)

> _This feature is not implemented in the current version._

---

## 🧩 Feature Summary

| Feature                     | Status |
| --------------------------- | ------ |
| Add/Edit/Delete Tasks       | ✅     |
| Save to Local Storage       | ✅     |
| Fetch from API              | ✅     |
| Loading/Error States        | ✅     |
| Responsive Sidebar (Mobile) | ✅     |
| Theme Toggle (Dark/Light)   | ✅     |
| Modular Code Structure      | ✅     |
| JSDoc Documentation         | ✅     |

---

## 🧠 Code Quality & Maintainability

- Separated code into logical modules:
  - `api.js`: Data fetching
  - `modal.js`: Modal behavior
  - `render.js`: DOM rendering
  - `storage.js`: CRUD operations
  - `sidebar.js`: Sidebar toggles
  - `theme.js`: Theme switch handling
- All major functions are documented with **JSDoc**.
- Uses clean and descriptive naming conventions.

---

## 📂 Project Structure

JSLPP/
│
├── assets/ # Logos and icons
├── index.html # Markup structure
├── styles.css # Responsive and theme styling
├── scripts.js # Entry point + app init
├── api.js # Fetch logic from remote API
├── render.js # Task rendering
├── storage.js # localStorage logic
├── modal.js # Add/Edit/Delete task modal
├── sidebar.js # Sidebar toggle logic
├── theme.js # Light/Dark mode toggle
└── README.md # Project documentation

---

## 🛠️ Tools Used

- HTML5 / CSS3 / JavaScript (ES6+)
- Fetch API & `localStorage`
- Netlify for deployment
- Google Fonts & HeroIcons
- Figma (UI reference)

---

## 🎓 Submission Checklist

- ✅ Final version pushed to GitHub
- ✅ Correct repository naming convention
- ✅ Deployment link added to README
- ✅ Recording link added to README
- ✅ Submitted via LMS under Projects > JSLPP Portfolio Piece

---
