import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserSignup(){
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!formData.username) { setError('Username is required'); return }
        if (!formData.email) { setError('Email is required'); return }
        if (!formData.password) { setError('Password is required'); return }
        if (!formData.confirmPassword) { setError('Please confirm your password'); return }
        if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); return }

        const existing = JSON.parse(localStorage.getItem('userData')) || []
        const duplicate = existing.find(u => u.email === formData.email)
        if (duplicate) { setError('An account with this email already exists'); return }

        setError('')

        const updatedData = [...existing, formData]
        localStorage.setItem('userData', JSON.stringify(updatedData))
        localStorage.setItem('loggedIn', JSON.stringify(formData))

        navigate('/')
    }

    return(
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-brand">
                    <h1>Khel<span>Maidan</span></h1>
                    <p>Create your account</p>
                </div>

                <div className="auth-form">
                    <div className="form-group">
                        <label>USERNAME</label>
                        <input type="text" name="username" placeholder="e.g. Michael Jackson"
                            value={formData.username} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>EMAIL</label>
                        <input type="email" name="email" placeholder="you@example.com"
                            value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" name="password" placeholder="••••••••"
                            value={formData.password} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>CONFIRM PASSWORD</label>
                        <input type="password" name="confirmPassword" placeholder="••••••••"
                            value={formData.confirmPassword} onChange={handleChange} />
                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button className="auth-btn" onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </div>

    )
}

export default UserSignup