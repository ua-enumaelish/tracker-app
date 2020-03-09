import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskContainer from './TaskContainer';

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
