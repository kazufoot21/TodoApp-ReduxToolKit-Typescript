import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import TaskFrom from './features/task/taskForm/TaskFrom';
import TaskList from './features/task/taskList/TaskList';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskFrom />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
