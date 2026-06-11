import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <h1>Khel<span>Maidan</span></h1>
          <p>Create a new account</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input id="confirm" type="password" placeholder="••••••••" />
          </div>

          <button className="auth-btn">Create Account</button>
        </div>

        <p className="auth-footer">
          Already have an account?
          <Link to="/signin">Sign in</Link>
        </p>

      </div>
    </div>
  );
}