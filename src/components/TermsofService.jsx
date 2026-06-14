import Footer from "./Footer"
import "../styles/login.css"

export default function TermsOfService() {
    return (
        <>
            <div className="auth-page">
                <div className="auth-card">
                    <div className="auth-brand">
                        <h1>Terms of <span>Service</span></h1>
                        <p>Last updated: June 2026</p>
                    </div>
                    <div style={{color: "var(--text)", lineHeight: "1.8"}}>
                        <p><strong style={{color: "var(--green)"}}>1. Acceptance</strong><br/>
                        By using KhelMaidan, you agree to these terms.</p>

                        <p><strong style={{color: "var(--green)"}}>2. Bookings</strong><br/>
                        All bookings are subject to venue availability. Cancellations must be made 24 hours in advance.</p>

                        <p><strong style={{color: "var(--green)"}}>3. Payments</strong><br/>
                        Payments are processed securely. Refunds are issued within 5-7 business days.</p>

                        <p><strong style={{color: "var(--green)"}}>4. Conduct</strong><br/>
                        Users must respect venue rules and other players at all times.</p>

                        <p><strong style={{color: "var(--green)"}}>5. Contact</strong><br/>
                        For any questions, contact us at support@khelmaidan.com</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}