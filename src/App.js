import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState ('');

  const addNewTask = () => {
    let _task = task
    _task.push(newTask);
    setTask(_task);
    setNewTask('');
  }

  return (
    <div className="container-task">
       <h2>Task list</h2>
      <div className='container-task-add'>
        <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
        <button onClick={()=> addNewTask () } className='button'>+</button>

      </div>
     
      <div className='container-task-list'>
        
        {
          task.map(_task => {
            return (
              <h5 key={_task}>{_task}</h5>
              
            )
            
          })
        }
        

      </div>
    </div>
  );
}

export default App;
