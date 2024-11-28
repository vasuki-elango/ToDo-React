# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Description`
This To-Do App project is a simple and efficient task management application built with React.js, leveraging the power of hooks such as useState, useRef, and useEffect. The app allows users to add, update, delete, and manage their tasks effectively. Additionally, the application persists tasks using localStorage, ensuring that users' data is saved even after refreshing or closing the browser.

### `Key Features`
Add Tasks: Users can create new tasks using an input field.
Delete Tasks: Completed or unwanted tasks can be removed.
Persist Data: Tasks are stored in the browser’s localStorage, ensuring data persistence.
Dynamic UI Updates: The app dynamically updates the UI as tasks are added, updated, or deleted.

### `React Hooks Used`
useState:
Manages the state of tasks (e.g., list of tasks, input values).
Tracks UI states like form input and task completion.

useRef:
Focuses the input field for better UX.
Helps track unchanging references, such as the current task being edited.

useEffect:
Handles the side effect of syncing tasks to localStorage whenever the task list changes.
Loads tasks from localStorage when the app is initialized.
LocalStorage Integration
The app saves the task list in localStorage whenever a task is added, updated, or deleted.
When the app is reloaded, it fetches the saved tasks from localStorage and populates the task list.
