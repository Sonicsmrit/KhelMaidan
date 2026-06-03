function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">KhelMaidan</h1>
            <div className="nav-links">
                <a href="/" className="active">Home</a>
                <a href="/search">Search</a>
                <a href="/venues">Venues</a>
            
            </div>

            <div className="nav-right">
                <a href="/support">SUPPORT</a>
                <a href="/login" className="signin-btn">Sign In</a>
            </div>
        </nav>
    )
    }
export default Navbar
