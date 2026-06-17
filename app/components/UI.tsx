interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const baseClass = `btn btn-${variant}`;
  return <button className={`${baseClass} ${className || ""}`} {...props} />;
}

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className }: CardProps) {
  return (
    <div className={`card ${className || ""}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
}

interface FormGroupProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormGroup({ label, error, required, children }: FormGroupProps) {
  return (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  onClose?: () => void;
}

export function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      {onClose && (
        <button onClick={onClose} className="alert-close">
          ×
        </button>
      )}
    </div>
  );
}

interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}