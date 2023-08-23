import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from './redux/actions/taskActions';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      if (editingTask) {
        dispatch(updateTask({ ...editingTask, text: taskText }));
        setEditingTask(null);
      } else {
        dispatch(addTask({ id: Date.now(), text: taskText }));
      }
      setTaskText('');
    }
  };

  const handleEditTask = (task) => {
    setTaskText(task.text);
    setEditingTask(task);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>{editingTask ? 'Update Task' : 'Add Task'}</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;