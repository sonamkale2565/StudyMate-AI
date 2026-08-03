import { useState, useEffect } from "react";


function Notes(){

const [note,setNote] = useState("");

const [notes,setNotes] = useState(()=>{

const savedNotes = localStorage.getItem("notes");

return savedNotes ? JSON.parse(savedNotes) : [];

});



useEffect(()=>{

localStorage.setItem(
"notes",
JSON.stringify(notes)
);

},[notes]);



function addNote(){

if(note===""){
return;
}


const newNote={

id:Date.now(),

text:note

};


setNotes([...notes,newNote]);

setNote("");

}



function deleteNote(id){

setNotes(

notes.filter(
(item)=>item.id!==id
)

);

}



return(

<section className="notes">


<h2>My Notes 📒</h2>


<div className="note-input">


<textarea

placeholder="Write your notes..."

value={note}

onChange={(e)=>setNote(e.target.value)}

></textarea>


<button onClick={addNote}>
Add Note
</button>


</div>



<div className="note-list">


{

notes.map((item)=>(


<div className="note-card" key={item.id}>


<p>{item.text}</p>


<button

onClick={()=>deleteNote(item.id)}

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


export default Notes;
