import React from 'react';
import { useSelector } from 'react-redux';

import { selectTask } from '../taskSlice';
import styles from './TaskList.module.scss';
import TaskItem from '../taskItem/taskItem';
// import sampleData from './sampleData.json';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);
  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
