import React from "react";
import Layout from "../components/Layout";

export default function Reports(){
  return (
    <Layout>
      <h2>Hospital Reports</h2>
      <div className="reports-grid card"><div className="report-card"><h4>Patient Statistics</h4><p>0 total patients</p><button className="btn btn-small">Generate</button></div></div>
    </Layout>
  )
}
