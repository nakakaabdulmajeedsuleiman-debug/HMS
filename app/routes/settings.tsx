import React from "react";
import Layout from "../components/Layout";

export default function Settings(){
  return (
    <Layout>
      <h2>Settings</h2>
      <div className="card"><h3>Account Settings</h3><form className="data-form"><div className="form-group"><label>Email</label><input type="email"/></div><div className="form-group"><label>Phone</label><input type="tel"/></div><button className="btn btn-primary" type="submit">Save Settings</button></form></div>
    </Layout>
  )
}
