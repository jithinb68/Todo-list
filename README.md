ToDo App

Deployed using vercel here - https://todo-private.vercel.app/

This is a simple ToDo app that allows users to add, delete, mark as complete, and edit their ToDo items. The app uses React for the frontend, Redux for state management, and Vitest with React Testing Library for unit testing.

Features / Functionalities

Add ToDo: Users can add a new ToDo to the list.
Delete ToDo: Users can delete an existing ToDo item.
Mark as Complete: Users can mark a ToDo as completed or uncompleted.
Edit ToDos: Users can edit the text of a ToDo item.

Markup
The app includes a form input for entering new ToDo items.
Each ToDo has options to mark it as complete, delete it, or edit its text.

Technologies Used
React: JavaScript library for building the user interface.
Redux: Used for state management to handle the list of ToDos and their statuses.
Vitest: A testing framework used for unit testing the major components.
React Testing Library: A library for testing React components in a way that simulates user interactions.
Vanilla CSS: Used for styling the application.

Code Structure
State Management: Redux is used to manage the application’s state. The state includes the list of ToDo items and their completion statuses.
Custom Hooks: The app makes use of custom hooks stored in separate files for actions like adding, deleting, editing, and toggling the completion status of ToDos.
Types & Interfaces: Types and interfaces are stored in a separate file (todoTypes.ts) to ensure a strongly-typed structure across the app.
Component Breakdown: The components are broken down into smaller, reusable pieces:
ToDoItem: Represents a single ToDo item.
ToDoList: Displays the list of all ToDo items.
StatusCircle, EditableText, and ActionButtons: Used within each ToDoItem for individual functionalities (status toggle, text editing, and actions like delete).

Internationalization & Security
Internationalization: The app keeps constants like messages in separate files, making it easier to implement internationalization in the future.
Security: We ensure all inputs are sanitized, and potential vulnerabilities such as cross-site scripting (XSS) are mitigated by using proper HTML escaping techniques and input validation.

Unit Testing
Testing: The major components are covered by unit tests using Vitest and React Testing Library to ensure they function as expected.

How to Run the Project

1. Clone the repository
   git clone https://github.com/jithinb68/Todo-list/tree/main

2. Install dependencies
   npm install

3. Run the app
   npm run dev

4. Run tests
   npm run test
