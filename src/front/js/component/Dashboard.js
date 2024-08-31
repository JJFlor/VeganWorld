// src/AdminDashboard.js

import React, { useState } from 'react';
import "/workspaces/VeganWorld/src/front/styles/dashboard.css";
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';  // Automatically register all necessary chart components




export function Dashboard() {

  const [isDashVisible, setDashVisible] = useState(false);

  // Step 2: Toggle function
  const toggleMenu = () => {
    setDashVisible(!isDashVisible);
  };

  // Sample data for the charts
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Visitors',
        data: [33, 53, 85, 41, 44],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (

    <div>

      <div className="dash-h1 text-center">
        <button onClick={toggleMenu} className="boton-dashboard">
          {isDashVisible ? 'Close' : 'Admin Dashboard'} <br></br>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z" />
            <path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z" />
          </svg>
        </button>
      </div>

      {isDashVisible && (

        <div className="dashboard collapsible-menu col-8 align-items-center">
          <div className="stats-cards">
            <div className="card">
              <h3>Total Users</h3>
              <p>1,200</p>
            </div>
            <div className="card">
              <h3>Total Sales</h3>
              <p>$12,500</p>
            </div>
            <div className="card">
              <h3>Active Subscriptions</h3>
              <p>300</p>
            </div>
          </div>
          <div className="charts">
            <div className="chart-container">
              <h3>Sales Over Time</h3>
              <Bar data={barData} />
            </div>
            <div className="chart-container">
              <h3>Visitors Over Time</h3>
              <Line data={lineData} />
            </div>
          </div>
        </div>
      )}



    </div>
  )
}
