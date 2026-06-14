import Footer from "./Footer"
import "../styles/login.css"

export default function AboutUs() {
    return (
        <>
            <div className="auth-page">
                <div className="auth-card">
                    <div className="auth-brand">
                        <h1>About <span>Us</span></h1>
                        <p>Who we are</p>
                    </div>
                    <p style={{color: "var(--text)", lineHeight: "1.8"}}>
                        KhelMaidan is Nepal's first online sports venue booking platform. 
                        We connect players with the best futsal, cricket, and basketball 
                        courts across Kathmandu and beyond. Our mission is to make sports 
                        accessible for everyone.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}