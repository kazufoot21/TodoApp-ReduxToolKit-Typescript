import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';

import styles from './taskItem.module.scss';
import TaskFrom from '../taskForm/TaskFrom';
import {
  selectIsModalOpen,
  handleModalOpen,
  selectTask,
  completeTask,
} from '../taskSlice';

interface PropTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}
const TaskItem: React.FC<PropTypes> = (props) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };

  const handleClose = () => dispatch(handleModalOpen(false));
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
            dispatch(completeTask(task));
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

      <Modal open={isModalOpen} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit Your Task</div>
          <TaskFrom edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
