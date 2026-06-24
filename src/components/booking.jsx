import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TIME_SLOTS = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export default function Booking() {
  const location = useLocation();
  const venue = location.state?.venue || {
    name: "Kathmandu Arena",
    location: "Baluwatar, KTR",
    sport: "Futsal (5A)",
    price: 1800,
    image: null,
  };

  const serviceCharge = 50;
  const total = (venue.price || 0) + serviceCharge;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!name || !phone || !date || !time) {
      alert("Please fill in all fields and select a time slot.");
      return;
    }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0d0d", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
        <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "40px", width: "380px", textAlign: "center" }}>
          <h1 style={{ color: "#1db954", margin: "0 0 8px" }}>✓ Booking Confirmed!</h1>
          <p style={{ color: "#aaa", marginBottom: "24px" }}>Your slot at {venue.name} is secured.</p>
          <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
            <p style={{ color: "#fff", margin: 0 }}>👤 {name}</p>
            <p style={{ color: "#fff", margin: 0 }}>📞 {phone}</p>
            <p style={{ color: "#fff", margin: 0 }}>📅 {date} at {time}</p>
            <p style={{ color: "#1db954", fontWeight: 700, margin: 0 }}>Total: NPR {total.toLocaleString()}</p>
          </div>
          <Link to="/" style={{ background: "#1db954", color: "#000", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: 700 }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", fontFamily: "sans-serif", padding: "32px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "880px" }}>

        <Link to="/" style={{ color: "#1db954", fontSize: "0.85rem", textDecoration: "none" }}>← Back to Venue</Link>

        <h1 style={{ color: "#fff", margin: "16px 0 4px" }}>Secure <span style={{ color: "#1db954" }}>Booking</span></h1>
        <p style={{ color: "#aaa", marginBottom: "24px" }}>Complete your registration for {venue.name}. Your slot is held for 10 minutes.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} placeholder="Sabin Karki" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>Phone Number (+977)</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} placeholder="98XXXXXXXX" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={labelStyle}>Time Slot</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                {TIME_SLOTS.map((slot) => (
                  <button key={slot} onClick={() => setTime(slot)} style={{
                    background: time === slot ? "#1db954" : "#1e1e1e",
                    color: time === slot ? "#000" : "#fff",
                    border: "1px solid #2a2a2a",
                    borderRadius: "8px",
                    padding: "10px",
                    cursor: "pointer",
                    fontWeight: time === slot ? 700 : 400
                  }}>{slot}</button>
                ))}
              </div>
            </div>
            <button onClick={handleConfirm} style={{ background: "#1db954", color: "#000", border: "none", borderRadius: "8px", padding: "13px", fontWeight: 700, cursor: "pointer", marginTop: "8px" }}>
              Confirm Booking »
            </button>
            <p style={{ color: "#555", fontSize: "0.75rem", textAlign: "center" }}>By confirming, you agree to KhelMaidan's venue policies.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
              {["eSewa", "Khalti", "Visa"].map(p => (
                <span key={p} style={{ fontSize: "0.7rem", color: "#aaa", border: "1px solid #2a2a2a", borderRadius: "4px", padding: "2px 8px" }}>{p}</span>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "16px" }}>
              <p style={{ color: "#555", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>Booking Summary</p>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "8px", background: venue.image ? "transparent" : "#1db954", flexShrink: 0, overflow: "hidden" }}>
                  {venue.image && <img src={venue.image} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>{venue.name}</p>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#aaa" }}>{venue.location}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <div>
                  <p style={{ margin: 0, fontSize: "0.7rem", color: "#555", textTransform: "uppercase" }}>Sport</p>
                  <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>{venue.sport}</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.7rem", color: "#555", textTransform: "uppercase" }}>Date</p>
                  <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>{date || "—"}</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.7rem", color: "#555", textTransform: "uppercase" }}>Time Slot</p>
                  <p style={{ margin: 0, fontWeight: 700, color: "#1db954" }}>{time || "—"}</p>
                </div>
              </div>
              <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "0.85rem", marginBottom: "4px" }}>
                  <span>Court Fee</span><span>NPR {(venue.price || 0).toLocaleString()}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "0.85rem", marginBottom: "8px" }}>
                  <span>Service Charge</span><span>NPR {serviceCharge}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#fff", borderTop: "1px solid #2a2a2a", paddingTop: "8px" }}>
                  <span>Total</span><span>NPR {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "12px", fontSize: "0.8rem", color: "#aaa" }}>
              <span style={{ color: "#1db954" }}>✓</span>
              <span>Instant confirmation upon booking.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const labelStyle = { color: "#7a7a7a", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" };
const inputStyle = { background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: "8px", color: "#fff", padding: "10px 12px", outline: "none", fontFamily: "sans-serif" };