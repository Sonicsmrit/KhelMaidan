import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">KhelMaidan</h1>
            <div className="nav-links">
                <Link to="/" className="active">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/venues">Venues</Link>
            
            </div>

            <div className="nav-right">
                <Link to="/support">SUPPORT</Link>
                <Link to="/login" className="signin-btn">Sign In</Link>
            </div>
        </nav>
    )
    }
export default Navbar
