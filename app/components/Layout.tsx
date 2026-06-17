import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  userRole?: string;
  title?: string;
}

export function Layout({ children, userRole, title }: LayoutProps) {
  return (
    <div className="dashboard-container">
      <Sidebar userRole={userRole} />
      <main className="main-content">
        <header className="top-bar">
          <div className="header-left">
            {title && <h1 className="page-title">{title}</h1>}
          </div>
          <div className="header-right">
            <span className="user-info">
              Role: <strong>{userRole || "user"}</strong>
            </span>
          </div>
        </header>
        <div className="content-wrapper">{children}</div>
      </main>
    </div>
  );
}