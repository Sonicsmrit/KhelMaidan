import { Link } from "react-router-dom";
import "../styles/login.css";

function SignIn() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <h1>Khel<span>Maidan</span></h1>
          <p>Sign in to your account</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>

          <button className="auth-btn">Sign In</button>
        </div>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/login">Log in</Link>
        </p>

      </div>
    </div>
  );
}

export default SignIn;