
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import AITools from "./components/AITools";
import TaskPlanner from "./components/TaskPlanner";
import Notes from "./components/Notes";
import Pomodoro from "./components/Pomodoro";

function App(){

  return(

    <div>

      <Navbar />

      <Hero />

      <Dashboard />

      <AITools />
      
      <TaskPlanner />
      <Notes />
      <Pomodoro />

    </div>

  );

}

export default App;
