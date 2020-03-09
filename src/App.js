import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskContainer from './components/TaskContainer';

function App() {
  return <>
    <header className="header">
      <h1>
        Tracker
      </h1>
    </header>
    <AddTask/>
    <TaskContainer/>
  </>
}

export default App;
