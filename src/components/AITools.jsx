function AITools(){

  const tools = [
    {
      name:"ChatGPT",
      desc:"AI assistant for learning, coding and problem solving"
    },
    {
      name:"Google Gemini",
      desc:"AI tool for research and creative ideas"
    },
    {
      name:"Notion AI",
      desc:"Helps in notes and productivity management"
    },
    {
      name:"GitHub Copilot",
      desc:"AI coding assistant for developers"
    }
  ];


  return(

    <section className="ai-section">

      <h2>AI Tools For Students 🤖</h2>

      <div className="ai-cards">

      {
        tools.map((tool,index)=>(

          <div className="ai-card" key={index}>

            <h3>{tool.name}</h3>

            <p>{tool.desc}</p>

          </div>

        ))
      }

      </div>

    </section>

  );

}

export default AITools;
