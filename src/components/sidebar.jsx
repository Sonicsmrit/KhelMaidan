import { useState } from "react";

function Sidebar() {

  let [selectedSport, setSelectedSport] = useState(null);
  let [kathmandu, setKathmandu]   = useState(true);   // checked by default
  let [lalitpur, setLalitpur]     = useState(false);
  let [bhaktapur, setBhaktapur]   = useState(false);
  let [price, setPrice]           = useState(3000);
  let [courtType, setCourtType]   = useState("All Types");


  function clearFilters() {
    setSelectedSport(null);
    setKathmandu(false);
    setLalitpur(false);
    setBhaktapur(false);
    setPrice(3000);
    setCourtType("All Types");
  }


  return (
    <aside>

      <div className="filter-section">
        <h4>Sport</h4>
        <div className="sport-tabs">

          <button className={"sport-tab " + (selectedSport === "Football"   ? "active" : "")} onClick={() => setSelectedSport("Football")}>   Football   </button>
          <button className={"sport-tab " + (selectedSport === "Cricket"    ? "active" : "")} onClick={() => setSelectedSport("Cricket")}>    Cricket    </button>
          <button className={"sport-tab " + (selectedSport === "Basketball" ? "active" : "")} onClick={() => setSelectedSport("Basketball")}> Basketball </button>
          <button className={"sport-tab " + (selectedSport === "Tennis"     ? "active" : "")} onClick={() => setSelectedSport("Tennis")}>     Tennis     </button>
          <button className={"sport-tab " + (selectedSport === "Badminton"  ? "active" : "")} onClick={() => setSelectedSport("Badminton")}>  Badminton  </button>
          <button className={"sport-tab " + (selectedSport === "Volleyball" ? "active" : "")} onClick={() => setSelectedSport("Volleyball")}> Volleyball </button>

        </div>
      </div>


      <div className="filter-section">
        <h4>Location</h4>
        <div className="checkbox-group">

          <label className="checkbox-item">
            <input type="checkbox" checked={kathmandu}  onChange={() => setKathmandu(!kathmandu)} />
            <span className="checkbox-box"></span>
            Kathmandu
          </label>

          <label className="checkbox-item">
            <input type="checkbox" checked={lalitpur}   onChange={() => setLalitpur(!lalitpur)} />
            <span className="checkbox-box"></span>
            Lalitpur
          </label>

          <label className="checkbox-item">
            <input type="checkbox" checked={bhaktapur}  onChange={() => setBhaktapur(!bhaktapur)} />
            <span className="checkbox-box"></span>
            Bhaktapur
          </label>

        </div>
      </div>


      <div className="filter-section">
        <h4>Price Range (NPR)</h4>
        <div className="price-range">

          <input type="range" min="0" max="5000" value={price}
            onChange={(e) => setPrice(e.target.value)}
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

          <label className="radio-item">
            <input type="radio" name="court" checked={courtType === "Indoor Only"}  onChange={() => setCourtType("Indoor Only")} />
            <span className="radio-dot"></span>
            Indoor Only
          </label>

          <label className="radio-item">
            <input type="radio" name="court" checked={courtType === "Outdoor Only"} onChange={() => setCourtType("Outdoor Only")} />
            <span className="radio-dot"></span>
            Outdoor Only
          </label>

          <label className="radio-item">
            <input type="radio" name="court" checked={courtType === "All Types"}    onChange={() => setCourtType("All Types")} />
            <span className="radio-dot"></span>
            All Types
          </label>

        </div>
      </div>


      <button className="btn-clear" onClick={clearFilters}>
        Clear All Filters
      </button>


    </aside>
  );
}

export default Sidebar;