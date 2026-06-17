import { Form, Link, useLocation } from "@remix-run/react";

interface SidebarProps {
  userRole?: string;
}

export function Sidebar({ userRole = "admin" }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "menu-link active" : "menu-link";
  };

  return (
    <aside className="sidebar-menu">
      <div className="sidebar-header">
        <h2>HealthHub</h2>
        <p>Medical Management Platform</p>
      </div>

      <nav className="menu">
        <Link to="/dashboard" className={isActive("/dashboard")}>
          <span className="icon">📊</span> Dashboard
        </Link>

        <Link to="/patients" className={isActive("/patients")}>
          <span className="icon">👥</span> Patients
        </Link>

        <Link to="/appointments" className={isActive("/appointments")}>
          <span className="icon">📅</span> Appointments
        </Link>

        <Link to="/doctors" className={isActive("/doctors")}>
          <span className="icon">👨‍⚕️</span> Doctors
        </Link>

        {(userRole === "admin" || userRole === "staff") && (
          <>
            <Link to="/staff" className={isActive("/staff")}>
              <span className="icon">👔</span> Staff
            </Link>
          </>
        )}

        <Link to="/services" className={isActive("/services")}>
          <span className="icon">🏥</span> Services
        </Link>

        <Link to="/billing" className={isActive("/billing")}>
          <span className="icon">💰</span> Billing
        </Link>

        <Link to="/reports" className={isActive("/reports")}>
          <span className="icon">📈</span> Reports
        </Link>

        {userRole === "admin" && (
          <>
            <Link to="/admin" className={isActive("/admin")}>
              <span className="icon">⚙️</span> Admin
            </Link>

            <Link to="/settings" className={isActive("/settings")}>
              <span className="icon">🔧</span> Settings
            </Link>
          </>
        )}
      </nav>

      <div className="sidebar-footer">
        <Form method="post" action="/logout">
          <button type="submit" className="logout-btn">
            <span className="icon">🚪</span> Logout
          </button>
        </Form>
      </div>
    </aside>
  );
}
