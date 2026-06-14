import { useState } from "react";
import "../styles/login.css";

const VENUES = [
  { id: "futsal-1", name: "Greenfield Futsal Arena" },
  { id: "cricket-1", name: "Kathmandu Cricket Ground" },
  { id: "basketball-1", name: "Patan Basketball Court" },
  { id: "futsal-2", name: "Baneshwor Sports Hall" },
];

const TIME_SLOTS = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export default function Booking() {
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = () => {
    if (!venue || !date || !time) {
      alert("Please select a venue, date, and time slot.");
      return;
    }
    setConfirmed(true);
  };

  const handleReset = () => {
    setVenue("");
    setDate("");
    setTime("");
    setConfirmed(false);
  };

  if (confirmed) {
    const venueName = VENUES.find((v) => v.id === venue)?.name;
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-brand">
            <h1>Booking <span>Confirmed</span></h1>
            <p>Your slot has been reserved</p>
          </div>
          <div className="auth-form">
            <div className="form-group">
              <label>Venue</label>
              <input value={venueName} disabled />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input value={date} disabled />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input value={time} disabled />
            </div>
            <button className="auth-btn" onClick={handleReset}>
              Make another booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <h1>Book a <span>Venue</span></h1>
          <p>Pick a venue, date, and time slot</p>
        </div>

        <div className="auth-form">
          <div className="form-group">
            <label htmlFor="venue">Venue</label>
            <select
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              style={{
                background: "var(--input-bg)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text)",
                fontFamily: "inherit",
                fontSize: "0.95rem",
                padding: "12px 14px",
                outline: "none",
              }}
            >
              <option value="">Select a venue</option>
              {VENUES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Time Slot</label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  style={{
                    background:
                      time === slot ? "var(--green)" : "var(--input-bg)",
                    color: time === slot ? "#000" : "var(--text)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "10px",
                    fontFamily: "inherit",
                    fontSize: "0.9rem",
                    fontWeight: time === slot ? "700" : "400",
                    cursor: "pointer",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button className="auth-btn" onClick={handleBook}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
