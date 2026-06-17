import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Staff(){
  const [staff,setStaff]=useState([{username:'admin', firstName:'Admin', lastName:'User', role:'Administrator'}]);
  const [show,setShow]=useState(false);
  const [form,setForm]=useState<any>({username:'', firstName:'', lastName:'', role:''});
  const add=(e:React.FormEvent)=>{e.preventDefault(); setStaff(s=>[...s, form]); setShow(false); setForm({username:'', firstName:'', lastName:'', role:''})}
  return (
    <Layout>
      <h2>Staff Management</h2>
      <div className="view-toolbar"><button className="btn btn-primary" onClick={()=>setShow(true)}>+ Add Staff</button></div>
      <div className="data-table card"><table><thead><tr><th>Username</th><th>Name</th><th>Role</th></tr></thead><tbody>{staff.map((s,i)=>(<tr key={i}><td>{s.username}</td><td>{s.firstName} {s.lastName}</td><td>{s.role}</td></tr>))}</tbody></table></div>
      {show && (<div className="modal"><div className="modal-content"><h3>Add Staff</h3><form onSubmit={add}><input required placeholder="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})} /><input required placeholder="First name" value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} /><input required placeholder="Last name" value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} /><select required value={form.role} onChange={e=>setForm({...form, role:e.target.value})}><option value="">Select Role</option><option>Doctor</option><option>Nurse</option><option>Receptionist</option></select><div style={{display:'flex',gap:8,marginTop:8}}><button className="btn btn-primary" type="submit">Add Staff</button><button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>Cancel</button></div></form></div></div>)}
    </Layout>
  )
}
