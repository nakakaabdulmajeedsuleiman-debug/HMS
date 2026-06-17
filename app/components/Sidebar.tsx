import React from "react";
import { NavLink } from "@remix-run/react";

const links: Array<[string,string]> = [
  ["/dashboard","📊 Dashboard"],
  ["/patients","👥 Patients"],
  ["/appointments","📅 Appointments"],
  ["/doctors","👨‍⚕️ Doctors"],
  ["/staff","👔 Staff"],
  ["/services","🏨 Services"],
  ["/billing","💰 Billing"],
  ["/reports","📈 Reports"],
  ["/settings","⚙️ Settings"],
  ["/admin","🔐 Admin Panel"],
];

export default function Sidebar(){
  return (
    <nav className="sidebar-menu">
      {links.map(([to,label])=> (
        <NavLink key={to} to={to} className={({isActive})=> isActive? 'menu-link active':'menu-link'}>{label}</NavLink>
      ))}
      <button className="btn btn-danger" style={{marginTop:8}}>🚪 Logout</button>
    </nav>
  )
}
