import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import styles from './TaskForm.module.scss';
import { createTask } from '../taskSlice';

type Inputs = {
  taskTitle: string;
};

const TaskFrom: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          // inputRef={register}
          {...register('taskTitle')}
          name="taskTitle"
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskFrom;
