import Navbar from '../components/Navbar'
import footer from '../components/Footer'
function Search() {
    return(
     /* SIDEBAR */
  <aside>
    <div class="filter-section">
      <h4>Sport</h4>
      <div class="sport-tabs">
        <button class="sport-tab active">Football</button>
        <button class="sport-tab">Futsal</button>
        <button class="sport-tab">Cricket</button>
      </div>
      <div class="sport-tabs" style="margin-top:6px">
        <button class="sport-tab">Basketball</button>
      </div>
    </div>
 
    <div class="filter-section">
      <h4>Location</h4>
      <div class="radio-group">
        <label class="radio-item">
          <input type="radio" name="loc" checked/>
          <span class="radio-dot"></span>
          Kathmandu
        </label>
        <label class="radio-item">
          <input type="radio" name="loc"/>
          <span class="radio-dot"></span>
          Lalitpur
        </label>
        <label class="radio-item">
          <input type="radio" name="loc"/>
          <span class="radio-dot"></span>
          Bhaktapur
        </label>
      </div>
    </div>
 
    <div class="filter-section">
      <h4>Price Range (NPR)</h4>
      <div class="price-range">
        <input type="range" min="0" max="5000" value="3000" id="priceRange"/>
        <div class="range-labels">
          <span>0</span>
          <span id="priceVal">3000+</span>
        </div>
      </div>
    </div>
 
    <div class="filter-section">
      <h4>Court Type</h4>
      <div class="radio-group">
        <label class="radio-item">
          <input type="radio" name="court"/>
          <span class="radio-dot"></span>
          Indoor Only
        </label>
        <label class="radio-item">
          <input type="radio" name="court"/>
          <span class="radio-dot"></span>
          Outdoor Only
        </label>
        <label class="radio-item">
          <input type="radio" name="court" checked/>
          <span class="radio-dot"></span>
          All Types
        </label>
      </div>
    </div>
 
    <button class="btn-clear">Clear All Filters</button>
  </aside>
    )
}