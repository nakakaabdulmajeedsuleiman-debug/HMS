import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Doctors(){
  const [doctors,setDoctors]=useState([{firstName:'Ahmed', lastName:'Ali', dept:'Surgery', license:'D-1234'}]);
  const [show,setShow]=useState(false);
  const [form,setForm]=useState<any>({firstName:'', lastName:'', dept:'', license:''});
  const add=(e:React.FormEvent)=>{e.preventDefault(); setDoctors(d=>[...d, form]); setShow(false); setForm({firstName:'', lastName:'', dept:'', license:''})}
  return (
    <Layout>
      <h2>Doctor Management</h2>
      <div className="view-toolbar"><button className="btn btn-primary" onClick={()=>setShow(true)}>+ Add Doctor</button></div>
      <div className="data-table card"><table><thead><tr><th>First</th><th>Last</th><th>Dept</th><th>License</th></tr></thead><tbody>{doctors.map((d,i)=>(<tr key={i}><td>{d.firstName}</td><td>{d.lastName}</td><td>{d.dept}</td><td>{d.license}</td></tr>))}</tbody></table></div>
      {show && (<div className="modal"><div className="modal-content"><h3>Add Doctor</h3><form onSubmit={add}><input required placeholder="First name" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} /><input required placeholder="Last name" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} /><input required placeholder="Department" value={form.dept} onChange={e=>setForm({...form, dept:e.target.value})} /><input required placeholder="License" value={form.license} onChange={e=>setForm({...form, license:e.target.value})} /><div style={{display:'flex',gap:8,marginTop:8}}><button className="btn btn-primary" type="submit">Add Doctor</button><button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>Cancel</button></div></form></div></div>)}
    </Layout>
  )
}
