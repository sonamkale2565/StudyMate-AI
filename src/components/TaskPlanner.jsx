import { useState } from "react";


function TaskPlanner(){

  const [task,setTask] = useState("");

  const [tasks,setTasks] = useState([]);


  function addTask(){

    if(task === ""){
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task
    };


    setTasks([...tasks,newTask]);

    setTask("");

  }


  function deleteTask(id){

    const updatedTasks = tasks.filter(
      (item)=> item.id !== id
    );

    setTasks(updatedTasks);

  }


  return(

    <section className="planner">

      <h2>My Study Planner 📝</h2>


      <div className="task-input">

        <input

        type="text"

        placeholder="Enter Study Task"

        value={task}

        onChange={(e)=>setTask(e.target.value)}

        />


        <button onClick={addTask}>
          Add Task
        </button>


      </div>



      <div className="task-list">

      {
        tasks.map((item)=>(

          <div className="task-card" key={item.id}>

            <p>{item.name}</p>

            <button 
            onClick={()=>deleteTask(item.id)}>
              Delete
            </button>

          </div>

        ))
      }


      </div>


    </section>

  );

}


export default TaskPlanner;
