import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Appointments(){
  const [appointments,setAppointments]=useState([{patient:'Jane Doe', doctor:'Dr. Ali', date:'2026-06-18', time:'14:00'}]);
  const [show,setShow]=useState(false);
  const [form,setForm]=useState<any>({patient:'', doctor:'', date:'', time:''});
  const add=(e:React.FormEvent)=>{e.preventDefault(); setAppointments(a=>[...a, form]); setShow(false); setForm({patient:'', doctor:'', date:'', time:''})}
  return (
    <Layout>
      <h2>Appointment Management</h2>
      <div className="view-toolbar"><button className="btn btn-primary" onClick={()=>setShow(true)}>+ Schedule Appointment</button></div>
      <div className="data-table card"><table><thead><tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th></tr></thead><tbody>{appointments.map((a,i)=>(<tr key={i}><td>{a.patient}</td><td>{a.doctor}</td><td>{a.date}</td><td>{a.time}</td></tr>))}</tbody></table></div>
      {show && (<div className="modal"><div className="modal-content"><h3>Schedule Appointment</h3><form onSubmit={add}><input required placeholder="Patient" value={form.patient} onChange={e=>setForm({...form, patient:e.target.value})} /><input required placeholder="Doctor" value={form.doctor} onChange={e=>setForm({...form, doctor:e.target.value})} /><input required type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} /><input required type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} /><div style={{display:'flex',gap:8,marginTop:8}}><button className="btn btn-primary" type="submit">Schedule</button><button type="button" className="btn btn-secondary" onClick={()=>setShow(false)}>Cancel</button></div></form></div></div>)}
    </Layout>
  )
}
