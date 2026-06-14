import Footer from "./Footer"
import "../styles/login.css"

export default function ContactSupport() {
    return (
        <>
            <div className="auth-page">
                <div className="auth-card">
                    <div className="auth-brand">
                        <h1>Contact <span>Support</span></h1>
                        <p>We are here to help</p>
                    </div>
                    <div className="auth-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea 
                                placeholder="Write your message here..."
                                style={{
                                    background: "var(--input-bg)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "8px",
                                    color: "var(--text)",
                                    fontFamily: "inherit",
                                    fontSize: "0.95rem",
                                    padding: "12px 14px",
                                    outline: "none",
                                    resize: "vertical",
                                    minHeight: "120px"
                                }}
                            />
                        </div>
                        <button className="auth-btn">Send Message</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}