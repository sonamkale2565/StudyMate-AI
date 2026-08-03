import { useState, useEffect } from "react";


function Pomodoro(){

const [time,setTime] = useState(1500);

const [running,setRunning] = useState(false);



useEffect(()=>{

let timer;

if(running){

timer=setInterval(()=>{

setTime((prev)=>{

if(prev<=0){

setRunning(false);

return 1500;

}

return prev-1;

});

},1000);

}


return ()=>clearInterval(timer);


},[running]);



function formatTime(){

let minutes=Math.floor(time/60);

let seconds=time%60;


return `${minutes}:${seconds<10 ? "0":""}${seconds}`;

}



return(

<section className="pomodoro">


<h2>Focus Timer ⏱</h2>


<h1>
{formatTime()}
</h1>


<button onClick={()=>setRunning(true)}>
Start
</button>


<button onClick={()=>setRunning(false)}>
Pause
</button>


<button onClick={()=>{

setRunning(false);

setTime(1500);

}}>
Reset
</button>


</section>

);


}


export default Pomodoro;
