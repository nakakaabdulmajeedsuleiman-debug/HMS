import React from "react";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return { demoUser: "admin", demoPass: "admin123" };
};

export default function Index() {
  const data = useLoaderData();
  return (
    <main>
      <header className="site-header">
        <div className="site-brand">
          <div className="site-brand-copy">
            <h1>🏥 Muslim Specialist Hospital Zaria</h1>
            <p>Professional Hospital Management System</p>
          </div>
        </div>
      </header>

      <section className="card" id="login-section">
        <h2>Staff Portal Login</h2>
        <form className="auth-form" method="post">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="login-footer">
          <button type="button" className="btn btn-secondary">Reset Password</button>
          <p className="demo-creds">Demo: {data.demoUser} / {data.demoPass}</p>
        </div>
      </section>
    </main>
  );
}
