import React from "react";
import Layout from "../components/Layout";

export default function Services(){
  const cards = [
    {title:'Pharmacy', desc:'Medication dispensing and inventory'},
    {title:'Laboratory', desc:'Diagnostic testing'},
    {title:'Surgery Room', desc:'Surgical procedures'},
    {title:'Labor Room', desc:'Maternity services'},
    {title:'Emergency', desc:'Accident and emergency'},
    {title:'Radiology', desc:'Imaging services'},
  ];
  return (
    <Layout>
      <h2>Hospital Services</h2>
      <div className="services-grid">
        {cards.map((c)=> (<div key={c.title} className="service-card card"><h4>{c.title}</h4><p>{c.desc}</p><button className="btn btn-small">Manage</button></div>))}
      </div>
    </Layout>
  )
}
