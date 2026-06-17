import React from "react";
import { useNavigate } from "@remix-run/react";

export default function Login(){
  const nav = useNavigate();
  const submit = (e: React.FormEvent) => { e.preventDefault(); nav('/dashboard'); };
  return (
    <main className="card" style={{maxWidth:420,margin:'3rem auto'}}>
      <h2>Staff Portal Login</h2>
      <form onSubmit={submit} className="auth-form">
        <div className="form-group"><label>Username</label><input required name="username"/></div>
        <div className="form-group"><label>Password</label><input required type="password" name="password"/></div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn btn-primary" type="submit">Login</button>
          <button className="btn btn-secondary" type="button" onClick={()=>nav('/reset')}>Reset Password</button>
        </div>
      </form>
      <p style={{marginTop:8,color:'#6b7280'}}>Demo: admin / admin123</p>
    </main>
  )
}
