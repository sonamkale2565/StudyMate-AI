let completedTasks = 0;


// Task Planner

function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }


    let li = document.createElement("li");


    li.innerHTML = `
        ${task}
        <button onclick="completeTask(this)">
        Complete
        </button>
    `;


    document.getElementById("taskList").appendChild(li);


    input.value="";

}



function completeTask(button){

    button.parentElement.remove();

    completedTasks++;

    document.getElementById("taskCount").innerHTML = completedTasks;

}




// Notes Save

function saveNote(){

    let note = document.getElementById("noteText").value;


    localStorage.setItem(
        "studyNote",
        note
    );


    alert("Note saved successfully");

}



window.onload=function(){


let savedNote = localStorage.getItem("studyNote");


if(savedNote){

document.getElementById("noteText").value=savedNote;

}


};






// Dark Mode

let themeBtn = document.getElementById("themeBtn");


themeBtn.onclick=function(){


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}

else{

themeBtn.innerHTML="🌙";

}


};








// Pomodoro Timer


let time = 1500;

let timer;



function startTimer(){


clearInterval(timer);



timer=setInterval(function(){


let minutes=Math.floor(time/60);

let seconds=time%60;



document.getElementById("timer").innerHTML =
`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;



if(time <= 0){

clearInterval(timer);

alert("Study session completed!");

time=1500;

}



time--;



},1000);



}




function resetTimer(){


clearInterval(timer);


time=1500;


document.getElementById("timer").innerHTML="25:00";


}
