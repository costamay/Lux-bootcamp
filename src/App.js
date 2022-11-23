import { useState, useContext } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";
import './App.css'
import { TasksContext } from './Providers/Tasks/tasks.provider'


function App() {
  const { tasks, removeTask } = useContext(TasksContext)
  const [taskList, setTaskList] = useState(tasks)

  function handleDelete(id){
  // let remTasks = taskList.filter(task=> task.id !== id)
  // setTaskList(remTasks)
   removeTask(id)
    
  }

  return (
    <div className="App">
      <CreateList setTaskList= {setTaskList}/>
      <DisplayList list ={taskList} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
