import { useState } from "react";


function ThemeToggle(){

const [dark,setDark] = useState(false);



function changeTheme(){

setDark(!dark);

document.body.classList.toggle("dark");

}



return(

<button onClick={changeTheme}>

{dark ? "☀️ Light Mode" : "🌙 Dark Mode"}

</button>

);


}


export default ThemeToggle;
