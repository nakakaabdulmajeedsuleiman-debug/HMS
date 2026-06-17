import React, { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren<{}>) {
  return (
    <div className="modal"><div className="modal-content">{children}</div></div>
  )
}
