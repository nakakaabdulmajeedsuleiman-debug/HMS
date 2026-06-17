import React from "react";
import Layout from "../components/Layout";

export default function Dashboard(){
  return (
    <Layout>
      <section>
        <h2>Dashboard</h2>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <div className="stat-card"><h4>Total Patients</h4><p className="stat-number">128</p></div>
          <div className="stat-card"><h4>Admitted Today</h4><p className="stat-number">8</p></div>
          <div className="stat-card"><h4>Scheduled Appointments</h4><p className="stat-number">23</p></div>
          <div className="stat-card"><h4>Pending Billing</h4><p className="stat-number">₦52,400</p></div>
        </div>
        <div style={{marginTop:16}}>
          <h3>Recent Activities</h3>
          <ul className="activity-list"><li>John Doe admitted to Male Ward</li><li>Appointment: Jane Smith with Dr. Ali at 14:00</li></ul>
        </div>
      </section>
    </Layout>
  )
}
