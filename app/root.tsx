import React from "react";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: "/styles.css" }];
export const meta = () => ({ title: "Muslim Specialist Hospital Zaria" });

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
