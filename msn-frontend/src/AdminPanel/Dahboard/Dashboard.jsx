import React from 'react';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <>
    <header className="header">
        <h1>Dashboard</h1>
    </header>
    <main className="dashboard">

      <section className="stats">
        <div className="card blue">
          <p>Total News</p>
          <h2>120</h2>
        </div>
        <div className="card green">
          <p>Published</p>
          <h2>85</h2>
        </div>
        <div className="card orange">
          <p>Draft</p>
          <h2>35</h2>
        </div>
      </section>

      <section className="activity">
        <div className="activity-header">
          <h2>Recent Activity</h2>
          <button className="range-button">1W</button>
        </div>
        <Chart />
      </section>
    </main>
    </>
  )
}

export default Dashboard