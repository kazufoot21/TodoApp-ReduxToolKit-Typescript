import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import styles from './TaskForm.module.scss';

type Inputs = {
  taskTitle: string;
};

const TaskFrom: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
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
