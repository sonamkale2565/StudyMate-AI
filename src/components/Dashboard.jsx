function Dashboard(){

  return(

    <section className="dashboard">

      <h2>Student Dashboard 📊</h2>

      <div className="dashboard-cards">

        <div className="card">
          <h3>📚 Total Tasks</h3>
          <p>12</p>
        </div>


        <div className="card">
          <h3>✅ Completed</h3>
          <p>8</p>
        </div>


        <div className="card">
          <h3>⏱ Study Hours</h3>
          <p>5 hrs</p>
        </div>


        <div className="card">
          <h3>🎯 Progress</h3>
          <p>70%</p>
        </div>


      </div>

    </section>

  );

}

export default Dashboard;
