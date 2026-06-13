import "../styles/search.css";

function Sidebar({ selectedSport, setSelectedSport, kathmandu, setKathmandu, lalitpur, setLalitpur, bhaktapur, setBhaktapur, price, setPrice, courtType, setCourtType }) {

  function clearFilters() {
    setSelectedSport(null);
    setKathmandu(false);
    setLalitpur(false);
    setBhaktapur(false);
    setPrice(5000);
    setCourtType("All Types");
  }

  return (
    <aside>
      <div className="filter-section">
        <h4>Sport</h4>
        <div className="sport-tabs">
          {["Football", "Cricket", "Basketball", "Tennis", "Badminton", "Volleyball"].map((sport) => (
            <button
              key={sport}
              className={"sport-tab " + (selectedSport === sport ? "active" : "")}
              onClick={() => setSelectedSport(selectedSport === sport ? null : sport)}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Location</h4>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input type="checkbox" checked={kathmandu} onChange={() => setKathmandu(!kathmandu)} />
            <span className="checkbox-box"></span>
            Kathmandu
          </label>
          <label className="checkbox-item">
            <input type="checkbox" checked={lalitpur} onChange={() => setLalitpur(!lalitpur)} />
            <span className="checkbox-box"></span>
            Lalitpur
          </label>
          <label className="checkbox-item">
            <input type="checkbox" checked={bhaktapur} onChange={() => setBhaktapur(!bhaktapur)} />
            <span className="checkbox-box"></span>
            Bhaktapur
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4>Price Range (NPR)</h4>
        <div className="price-range">
          <input type="range" min="0" max="5000" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
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
              <input type="radio" name="court" checked={courtType === type} onChange={() => setCourtType(type)} />
              <span className="radio-dot"></span>
              {type}
            </label>
          ))}
        </div>
      </div>

      <button className="btn-clear" onClick={clearFilters}>Clear All Filters</button>
    </aside>
  );
}

export default Sidebar;