import React from "react";

export default function DataTable({ columns, rows }: { columns: string[]; rows: any[] }) {
  return (
    <div className="data-table card">
      <table>
        <thead>
          <tr>{columns.map((c)=> <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={columns.length}>No data</td></tr>
          ) : (
            rows.map((r,i)=> (
              <tr key={i}>{columns.map((c)=> <td key={c}>{r[c] ?? ''}</td>)}</tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
