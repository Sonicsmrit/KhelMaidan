import { NavLink } from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar">

            <h1 className="logo">KhelMaidan</h1>

            <div className="nav-links">
                {/* react gives isActive automatically and becomes True when the link is active */}
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink> 
                <NavLink to="/search" className={({isActive}) => isActive ? 'active':''}>Search</NavLink>
                <NavLink to="/venues" className={({isActive}) => isActive ? 'active':''}>Venues</NavLink>
            
            </div>

            <div className="nav-right">
                <NavLink to="/support">SUPPORT</NavLink>
                <NavLink to="/login" className="signin-btn">Sign In</NavLink>
            </div>
        </nav>
    )
    }
export default Navbar
