import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Navbar() {
    const location = useLocation()

    const navigate = useNavigate()
    const [isOwner, setIsOwner] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('loggedInOwner')
        navigate('/')
    }
    
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedInOwner')

        if (loggedIn) {
            setIsOwner(true)
        }

    }, [])

    return(
        <nav className="navbar">

            <h1 className="logo">KhelMaidan</h1>

            <div className="nav-links">
                {/* react gives isActive automatically and becomes True when the link is active */}
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink> 
                <NavLink to="/search" className={({isActive}) => isActive ? 'active':''}>Search</NavLink>
                <NavLink to="/venues" className={({isActive}) => isActive ? 'active':''}>Venues</NavLink>
                {isOwner && (
                    <NavLink to="/owner-dashboard" className={({isActive}) => isActive ? 'active':''}>Dashboard</NavLink>

                )
                }
            
            </div>

            <div className="nav-right">
                <NavLink to="/support">SUPPORT</NavLink>
                {!isOwner && (
                    <NavLink to="/signin" className="signin-btn">Sign In</NavLink>
                )}
                {
                    isOwner && (
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    )
                }
            </div>
        </nav>
    )
    }
export default Navbar
