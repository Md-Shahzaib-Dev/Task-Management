import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from './redux/actions/taskActions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    } else {
      alert("Please add some task in input ...")
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
    <>
      <Navbar />
      <div className='container mx-auto p-5 min-h-screen my-4'>
        <h1 className="text-3xl font-medium mb-4">Task Management App</h1>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md mb-2"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-8" onClick={handleAddTask}>{editingTask ? 'Update Task' : 'Add Task'}</button>
        <h3 className="font-medium text-2xl mb-4">Your Task</h3>
        {tasks?.map((task, index) => (
          <div key={task.id} className="flex items-center justify-between mb-2 border rounded-md p-2">
            <div>
              <span className="py-1 px-2.5 bg-black text-white rounded-full">{index + 1}</span>
              <span className="px-2 font-medium">{task.text}</span>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 mr-4 py-1 px-2 text-white rounded" onClick={() => handleEditTask(task)}>Edit</button>
              <button className="bg-red-500 hover:bg-red-700 py-1 px-2 text-white rounded" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;