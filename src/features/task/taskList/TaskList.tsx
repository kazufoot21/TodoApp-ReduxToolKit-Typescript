import React from 'react';

import sampleData from './sampleData.json';
import styles from './TaskList.module.scss';
import TaskItem from '../taskItem/taskItem';

const TaskList: React.FC = () => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
