import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TasksProvider from './Providers/Tasks/tasks.provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);

