import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import styles from './TaskForm.module.scss';
import { createTask, handleModalOpen } from '../taskSlice';

type Inputs = {
  taskTitle: string;
};

type ProTypes = {
  edit?: boolean;
};

const TaskFrom: React.FC<ProTypes> = (props) => {
  const { edit } = props;
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label={edit ? 'Edit Task' : 'New Task'}
          defaultValue={edit ? 'default value' : ''}
          variant="outlined"
          // inputRef={register}
          {...register('taskTitle')}
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button
              type="button"
              className={styles.cancel_button}
              onClick={() => dispatch(handleModalOpen(false))}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskFrom;
