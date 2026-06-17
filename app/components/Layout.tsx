import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="site-brand-copy">
          <h1>🏥 Muslim Specialist Hospital Zaria</h1>
          <p className="sub">Hospital Management System</p>
        </div>
      </header>
      <div className="dashboard-container">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main-content">{children}</main>
      </div>
      <footer className="footer">© 2026 Muslim Specialist Hospital Zaria. All rights reserved.</footer>
    </div>
  );
}
