import React from "react";
import Layout from "../components/Layout";

export default function Admin(){
  return (
    <Layout>
      <h2>🔐 Admin Panel</h2>
      <div className="card"><h3>User Management</h3><div className="view-toolbar"><button className="btn btn-primary">+ Add User</button></div></div>
    </Layout>
  )
}
