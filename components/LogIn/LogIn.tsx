'use client'
import Link from "next/link";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import { loginUser } from "./fakeAuth";


export function loader({ request }:any) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }:any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { email, password } = data;
  const response = await loginUser(email, password);
  if (response.status === 200) {
    return redirect("/dashboard");
  } else {
    return response.message;
  }
}

export default function LogInPage() {
  const [message, setMessage] = React.useState();
  const [err, setErr] = React.useState();
  return (
    <div className="logIn-container">
      <div className="logIn-image"></div>
      <div className="logIn-content">
        <div>
          <h1 className="heading-large">
            Welcome to <span>Chang</span>ia
          </h1>
          {err && <p className="text-small warning">{err}</p>}

          {message && <p className="text-small warning">{message}</p>}
        </div>

        <form method="post">
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="button-text">Sign In</button>
        </form>
        <div className="other-options">
          <p className="text-small">
            <span>OR</span> Login with
          </p>
          <div className="login-icon-links">
            <a href="">
              <img src="/Icons/logos_facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/Icons/flat-color-icons_google.png" alt="" />
            </a>
          </div>
        </div>
        <p className="text-small ">
          Don’t have an account?{" "}
          <Link className="register-link" href="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
