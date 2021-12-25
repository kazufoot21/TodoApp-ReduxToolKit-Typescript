import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './TaskItem.module.scss';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}
const TaskItem: React.FC<PropTypes> = (props) => {
  const { task } = props;
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => {
            console.log(`check${task.id}`);
          }}
          className={styles.checkbox}
        />
        <button
          onClick={() => {
            console.log(`edit ${task.id}`);
          }}
          className={styles.edit_button}
        >
          <EditIcon className={styles.icon} />
        </button>
        <button
          onClick={() => {
            console.log(`delete${task.id}`);
          }}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
