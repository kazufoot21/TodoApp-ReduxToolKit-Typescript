import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import TaskFrom from './features/task/taskForm/TaskFrom';
import TaskList from './features/task/taskList/TaskList';

import { auth } from './firebase';

const App: React.FC = () => {
  console.log(auth);
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
