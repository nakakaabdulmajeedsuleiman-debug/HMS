import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { createUserSession, getUserId } from "~/utils/auth";

const validUser = { username: "admin", password: "admin123" };

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/dashboard");
  }
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (username !== validUser.username || password !== validUser.password) {
    return json({ error: "Invalid username or password." }, { status: 401 });
  }

  return createUserSession(validUser.username, "/dashboard");
};

export default function Login() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>HealthHub Staff Portal</h2>
        <p>Sign in to manage patients, appointments, billing, and hospital operations.</p>

        <Form method="post" className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" placeholder="admin" required className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="admin123" required className="form-input" />
          </div>

          {actionData?.error && <div className="alert alert-error">{actionData.error}</div>}

          <div className="form-actions">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <button className="btn btn-secondary" type="button" onClick={() => window.location.reload()}>
              Reset
            </button>
          </div>
        </Form>

        <p className="auth-note">Demo credentials: <strong>admin / admin123</strong></p>
      </div>
    </main>
  );
}
