# 🧩 Kanban Task Board – JSL05_TASKBOARD_FIGMA

A fully responsive **Kanban task management app** built with vanilla HTML, CSS, and JavaScript – perfectly aligned to a Figma design. Tasks are persisted in localStorage and organized by status ("To Do", "Doing", "Done") with a clean modular structure.

---

## 🚀 Features

- 📌 Add, update, and delete tasks with title, description, and status
- 💾 Persistent storage using `localStorage`
- 🧭 Tasks stay in correct status columns on reload
- 📱 Fully responsive layout (mobile to desktop)
- 🎨 "Add Task" button and modal match exact Figma specs
- 🔎 Input validation (prevents duplicate titles)
- 🧩 Modular architecture with separation of concerns
- ✍️ JSDoc documentation on key functions

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (with media queries and variables)
- JavaScript (ES6+)
- Figma (UI reference)
- LocalStorage API

---

## 📂 Folder Structure

```
JSL05_TASKBOARD_FIGMA/
│
├── assets/              # Logo and icons
├── index.html           # Page structure
├── styles.css           # Styling + responsive layout
├── scripts.js           # App init, event bindings
├── render.js            # Task rendering logic
├── modal.js             # Modal handling (add/edit)
├── storage.js           # localStorage CRUD operations
```

---

## ⚙️ Setup Instructions

1. **Clone or Download the Repo**
   ```bash
   git clone https://github.com/yourusername/JSL05_TASKBOARD_FIGMA.git
   ```

2. **Open `index.html` in any modern browser**
   > No build step or server required.

---

## 🧪 Usage Examples

### ➕ Add a New Task

1. Click the **“+” Add Task** button.
2. Fill in the title, description, and choose a status.
3. Click **Create Task**.
4. The task will appear in the appropriate column and persist on refresh.

### ✏️ Edit an Existing Task

1. Click on a task card.
2. The modal opens pre-filled for editing.
3. Update the values and click **Update Task**.

### 🗑️ Delete a Task (Optional if implemented)

1. Could be extended via delete icon/button per card.

---

## 📱 Responsive Behavior

- On **mobile**, the "Add Task" button becomes a floating `+` button in the bottom-right.
- The modal and task cards adapt fluidly to screen size.

---

## 📌 Accessibility Notes

- ARIA labels used for key buttons.
- Focus states preserved for keyboard navigation.
- Modal can be closed with Escape or the close (`×`) button.

---

## 📄 License

MIT License – Feel free to use, fork, and contribute!

---

## 🙌 Acknowledgements

- Figma reference design by CodeSpace
- Icon support from Heroicons / Google Fonts

---

> Built with care and clean code ♥️
