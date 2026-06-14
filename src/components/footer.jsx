import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span className="footer-logo">KhelMaidan</span>
                <p>&copy; 2024 KhelMaidan Nepal. All Rights Reserved.<br />
                Kathmandu Support: +977-1-69696969</p>
            </div>
            <div className="footer-links">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Support</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/list-venue">List Your Venue</Link>
            </div>
        </footer>
    )
}

export default Footer
