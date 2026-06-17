import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Billing(){
  const [invoices,setInvoices]=useState([{id:1, patient:'Jane Doe', amount:5200, status:'Pending'}]);
  return (
    <Layout>
      <h2>Billing Management</h2>
      <div className="view-toolbar"><button className="btn btn-primary">+ Create Invoice</button></div>
      <div className="data-table card"><table><thead><tr><th>ID</th><th>Patient</th><th>Amount</th><th>Status</th></tr></thead><tbody>{invoices.map((inv)=> (<tr key={inv.id}><td>{inv.id}</td><td>{inv.patient}</td><td>₦{inv.amount}</td><td>{inv.status}</td></tr>))}</tbody></table></div>
    </Layout>
  )
}
