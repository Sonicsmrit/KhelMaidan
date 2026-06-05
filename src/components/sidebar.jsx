import { useState } from "react";

function Sidebar() {
  const [selectedSport, setSelectedSport] = useState("Football");
  const [location, setLocation] = useState("Kathmandu");
  const [price, setPrice] = useState(3000);
  const [courtType, setCourtType] = useState("All Types");

  const sports = ["Football", "Futsal", "Cricket", "Basketball"];

  return (
    <aside>
      <div className="filter-section">
        <h4>Sport</h4>
        <div className="sport-tabs">
          {sports.map((sport) => (
            <button
              key={sport}
              className={`sport-tab ${selectedSport === sport ? "active" : ""}`}
              onClick={() => setSelectedSport(sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Location</h4>
        <div className="radio-group">
          {["Kathmandu", "Lalitpur", "Bhaktapur"].map((loc) => (
            <label key={loc} className="radio-item">
              <input
                type="radio"
                name="loc"
                checked={location === loc}
                onChange={() => setLocation(loc)}
              />
              <span className="radio-dot"></span>
              {loc}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Price Range (NPR)</h4>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="5000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <div className="range-labels">
            <span>0</span>
            <span>{price === 5000 ? "5000+" : price}</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Court Type</h4>
        <div className="radio-group">
          {["Indoor Only", "Outdoor Only", "All Types"].map((type) => (
            <label key={type} className="radio-item">
              <input
                type="radio"
                name="court"
                checked={courtType === type}
                onChange={() => setCourtType(type)}
              />
              <span className="radio-dot"></span>
              {type}
            </label>
          ))}
        </div>
      </div>

      <button className="btn-clear" onClick={() => {
        setSelectedSport("Football");
        setLocation("Kathmandu");
        setPrice(0);
        setCourtType("All Types");
      }}>
        Clear All Filters
      </button>
    </aside>
  );
}

export default Sidebar;