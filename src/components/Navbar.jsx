import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Navbar() {
    const location = useLocation()

    const navigate = useNavigate()
    const [isOwner, setIsOwner] = useState(false)
    const [isUser, setIsUser] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('loggedInOwner')
        localStorage.removeItem('loggedIn')
        setIsOwner(false)
        setIsUser(false)
        navigate('/')
    }
    
    useEffect(() => {
        const loggedInOwner = localStorage.getItem('loggedInOwner')
        const LoggedIn = localStorage.getItem('loggedIn')

        if (loggedInOwner) {
            setIsOwner(true)
        }

        if(LoggedIn){
            setIsUser(true)
        }

    }, [])

    return(
        <nav className="navbar">

            <h1 className="logo"><NavLink to="/">KhelMaidan</NavLink></h1>

            <div className="nav-links">
                {/* react gives isActive automatically and becomes True when the link is active */}
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink> 
                <NavLink to="/search" className={({isActive}) => isActive ? 'active':''}>Search Venues</NavLink>
                <NavLink to="/AboutUs" className={({isActive}) => isActive ? 'active':''}>About Us</NavLink>

                {isOwner && (
                    <NavLink to="/owner-dashboard" className={({isActive}) => isActive ? 'active':''}>Dashboard</NavLink>

                )
                }
            
            </div>

            <div className="nav-right">
            
                <NavLink to="/support">SUPPORT</NavLink>
                
            
                {!isOwner && !isUser && (
                    <NavLink to="/signin" className="signin-btn">Sign In</NavLink>
                )}
                {
                    (isOwner || isUser) && (
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    )
                }
            </div>
        </nav>
    )
    }
export default Navbar
