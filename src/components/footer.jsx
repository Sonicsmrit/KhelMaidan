import { NavLink} from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span className="footer-logo">KhelMaidan</span>

                <p>&copy; 2030 KhelMaidan Nepal. All Rights Reserved.<br />
                Kathmandu Support: +977-1-69696969</p>

            </div>
            <div className="footer-links">

                <NavLink to='/AboutUs'>About Us</NavLink>
                <NavLink to="/support">Contact Support</NavLink>
                <NavLink to="/terms">Terms of Service</NavLink>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/venue-owner-login">List Your Venue</NavLink>
            </div>
        </footer>
    )
}

export default Footer