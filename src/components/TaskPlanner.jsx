import { useState } from "react";


function TaskPlanner(){

const [task,setTask] = useState("");

const [tasks,setTasks] = useState([]);



function addTask(){

if(task===""){
return;
}


const newTask={

id:Date.now(),

name:task,

completed:false

};


setTasks([...tasks,newTask]);

setTask("");

}



function deleteTask(id){

setTasks(
tasks.filter(
(item)=>item.id!==id
)
);

}



function completeTask(id){

setTasks(

tasks.map((item)=>

item.id===id

?

{...item,completed:!item.completed}

:

item

)

);

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



<div>

{

tasks.map((item)=>(


<div className="task-card" key={item.id}>


<input

type="checkbox"

checked={item.completed}

onChange={()=>completeTask(item.id)}

/>


<p className={item.completed ? "completed":""}>

{item.name}

</p>


<button

onClick={()=>deleteTask(item.id)}

>

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
