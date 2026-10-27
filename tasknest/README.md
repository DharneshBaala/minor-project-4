# TaskNest — To-Do & Notes Manager

A modern, responsive productivity application built with React and Vite. TaskNest helps users manage daily tasks, track their progress, and organize notes in one place.

## ✨ Features

### 📊 Dashboard
- View total tasks, completed tasks, and pending tasks.
- Track your productivity from a centralized dashboard.
- View the number of saved notes.
- Navigate easily between the Dashboard, To-Do, and Notes pages.

### ✅ To-Do Manager
- Create new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or pending.
- Filter tasks by All, Pending, and Completed.
- Add due dates to tasks.
- View task statistics.

### 📝 Notes Manager
- Create and manage notes.
- Edit existing notes.
- Delete notes.
- Search notes.
- Organize notes using categories.
- Save notes locally in your browser.

### 🎨 User Interface
- Modern, clean interface.
- Dashboard with productivity statistics.
- Responsive layout for different screen sizes.
- Reusable React components.

### 💾 Data Persistence
- Tasks and notes are stored in browser `localStorage`.
- Data remains available after refreshing the page.
- No backend or database is required for the current version.

## 🛠️ Technologies Used

- **React** — Building the user interface.
- **Vite** — Development server and build tool.
- **JavaScript (ES6+)** — Application logic.
- **HTML5** — Page structure.
- **CSS3** — Styling and responsive layouts.
- **Browser localStorage** — Saving tasks and notes.
- **Git and GitHub** — Version control and source code hosting.

## 📁 Project Structure

```text
TaskNest/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NoteList.jsx
│   │   ├── NotesApp.jsx
│   │   ├── TodoApp.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: Your actual folder structure may differ slightly depending on your implementation.*

## 🚀 Getting Started

Follow these steps to run TaskNest on your computer.

### Prerequisites

Install the following software:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/TaskNest.git
```

### 2. Navigate to the Project Directory

```bash
cd TaskNest
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display a local development address in your terminal, usually:

```text
http://localhost:5173/
```

Open the displayed address in your browser to use TaskNest.

## 📖 How to Use

### Managing Tasks

1. Open the To-Do page.
2. Enter a task and its details.
3. Add the task to your list.
4. Mark it as completed when finished.
5. Edit or delete tasks as needed.
6. Use the filters to view all, pending, or completed tasks.

### Managing Notes

1. Open the Notes page.
2. Enter a note title and content.
3. Select a category if available.
4. Save the note.
5. Search, edit, or delete notes as needed.

### Tracking Progress

1. Open the Dashboard.
2. View your total tasks.
3. Check completed and pending task counts.
4. View the number of saved notes.

## 💾 Data Storage

TaskNest currently uses browser `localStorage` to store tasks and notes.

**Important limitations:**
- Data is stored locally in the browser.
- Data is not synchronized between devices.
- Data is not shared between different browsers.
- Clearing the browser's site data may remove saved information.
- The current version does not use a backend database or user authentication.

## 🔮 Future Improvements

Possible future enhancements include:

- User registration and login.
- MongoDB database integration.
- Backend API using Node.js and Express.
- Cloud synchronization across devices.
- Task reminders and notifications.
- Advanced sorting and search options.
- Productivity charts and progress indicators.
- Light and dark theme switching.

These are potential improvements and may not be implemented in the current version.

## 🎯 Project Objectives

The main objectives of TaskNest are to:

- Build a practical productivity application using React.
- Understand component-based development.
- Practice React state management and hooks.
- Implement CRUD operations for tasks and notes.
- Work with event handling and controlled form inputs.
- Persist application data using browser `localStorage`.
- Create a clean and user-friendly interface.

## 🤝 Contributing

This is a learning project. Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## 📄 License

This project is intended for educational and personal learning purposes. Add a license file if you intend to distribute it under a specific open-source license.

---

**Built with ❤️ using React and Vite.**