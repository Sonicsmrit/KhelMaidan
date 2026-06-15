import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function SignIn() {

  const [error, setError] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignIn = () =>{
    const signined = {email:Email, password:password}

    //checking venue owners first
    const allOwners = JSON.parse(localStorage.getItem('ownerData') || '[]')
    const foundOwner = allOwners.find(o => o.email === Email && o.password === password)

    if(foundOwner){
      localStorage.setItem('loggedInOwner', JSON.stringify(foundOwner))
      navigate('/owner-dashboard')
      return
    }

    //checking regular users second

    const allUsers = JSON.parse(localStorage.getItem('userData') || '[]')
    const foundUser = allUsers.find(u => u.email === Email && u.password === password)

    if (foundUser) {
      localStorage.setItem('loggedIn', JSON.stringify(foundUser))
      navigate('/')
      return
    }

    setError('Invalid email or password')

  }

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
            <input id="email" type="email" placeholder="you@example.com" value={Email} onChange={(e)=> setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-btn"  onClick={handleSignIn}>Sign In</button>
        </div>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default SignIn;