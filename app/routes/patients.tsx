import React, { useState } from "react";
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";

export default function Patients(){
  const [patients,setPatients]=useState([ {firstName:'Jane', lastName:'Doe', age:29, gender:'Female', contact:'0801', ward:'Female Ward'}]);
  const [show,setShow]=useState(false);
  const [form,setForm]=useState<any>({});
  const add=(e:React.FormEvent)=>{e.preventDefault(); setPatients(p=>[...p, form]); setForm({}); setShow(false)}
  return (
    <Layout>
      <h2>Patient Management</h2>
      <div className="view-toolbar"><input className="search-input" placeholder="Search patients..." /><button className="btn btn-primary" onClick={()=>setShow(true)}>+ Add New Patient</button></div>
      <DataTable columns={["firstName","lastName","age","gender","contact","ward"]} rows={patients} />
      {show && (<div className="modal"><div className="modal-content"><h3>Add New Patient</h3><form onSubmit={add} className="data-form"><input required placeholder="First name" value={form.firstName||''} onChange={e=>setForm({...form, firstName:e.target.value})} /><input required placeholder="Last name" value={form.lastName||''} onChange={e=>setForm({...form, lastName:e.target.value})} /><input required type="number" placeholder="Age" value={form.age||''} onChange={e=>setForm({...form, age: Number(e.target.value)})} /><select required value={form.gender||''} onChange={e=>setForm({...form, gender:e.target.value})}><option value="">Select</option><option>Male</option><option>Female</option></select><input placeholder="Contact" value={form.contact||''} onChange={e=>setForm({...form, contact:e.target.value})} /><div style={{display:'flex',gap:8,marginTop:8}}><button className="btn btn-primary" type="submit">Save Patient</button><button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>Cancel</button></div></form></div></div>)}
    </Layout>
  )
}
