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

      <div className="dash-h1">
      <h3 onClick={toggleMenu} style={{ cursor: 'pointer', color: '#006769' }} className="text-center">
      {isDashVisible ? 'Hide' : 'Admin Dashboard'}
      </h3>
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
      )};



    </div>
  );
}
