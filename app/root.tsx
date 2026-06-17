import React from "react";
import { Links, LiveReload, Meta, Outlet, Scripts, isRouteErrorResponse, useRouteError } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: "/styles.css" }];
export const meta = () => ({ title: "HealthHub - Medical Management Platform" });

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  const message = isRouteErrorResponse(error) ? error.statusText : "An unexpected error occurred";

  return (
    <html>
      <head>
        <title>Error</title>
        <Links />
      </head>
      <body>
        <div className="error-page">
          <div className="error-container">
            <h1 className="error-code">{status}</h1>
            <h2 className="error-message">{message}</h2>
            <p className="error-description">
              {status === 404
                ? "The page you're looking for doesn't exist."
                : "Something went wrong. Please try again later."}
            </p>
            <a href="/" className="error-link">← Back to Home</a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
