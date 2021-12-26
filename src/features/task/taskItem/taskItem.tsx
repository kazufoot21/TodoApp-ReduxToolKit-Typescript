import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';

import styles from './TaskItem.module.scss';
import TaskFrom from '../taskForm/TaskFrom';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}
const TaskItem: React.FC<PropTypes> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

        <button onClick={handleOpen} className={styles.edit_button}>
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

      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit Your Task</div>
          <TaskFrom edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
