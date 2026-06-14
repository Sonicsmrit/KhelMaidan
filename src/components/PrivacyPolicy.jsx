import Footer from "./Footer"
import "../styles/login.css"

export default function PrivacyPolicy() {
    return (
        <>
            <div className="auth-page">
                <div className="auth-card">
                    <div className="auth-brand">
                        <h1>Privacy <span>Policy</span></h1>
                        <p>Last updated: June 2026</p>
                    </div>
                    <div style={{color: "var(--text)", lineHeight: "1.8"}}>
                        <p><strong style={{color: "var(--green)"}}>1. Data We Collect</strong><br/>
                        We collect your name, email, and booking history to provide our services.</p>

                        <p><strong style={{color: "var(--green)"}}>2. How We Use It</strong><br/>
                        Your data is used only to manage bookings and improve your experience.</p>

                        <p><strong style={{color: "var(--green)"}}>3. Data Sharing</strong><br/>
                        We never sell your personal data to third parties.</p>

                        <p><strong style={{color: "var(--green)"}}>4. Cookies</strong><br/>
                        We use cookies to keep you logged in and remember your preferences.</p>

                        <p><strong style={{color: "var(--green)"}}>5. Your Rights</strong><br/>
                        You can request to delete your account and data at any time by contacting us.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}