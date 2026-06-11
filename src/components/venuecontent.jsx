import { useState } from "react";
import "../styles/VenueResults.css";
// ── Venue data ──────────────────────────────────────────────────────────────
const venues = [
  {
    id: 1,
    name: "Kickoff Arena Koteshwor",
    location: "Koteshwor, Kathmandu",
    type: "INDOOR",
    rating: 4.8,
    price: 1200,
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
  },
  {
    id: 2,
    name: "Mulpani Sports Complex",
    location: "Mulpani, Kathmandu",
    type: "OUTDOOR",
    rating: 4.6,
    price: 2500,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
  },
  {
    id: 3,
    name: "Lalitpur Hoops Center",
    location: "Jhamsikhel, Lalitpur",
    type: "INDOOR",
    rating: 4.9,
    price: 1800,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
  },
  {
    id: 4,
    name: "Skyline Futsal Hub",
    location: "Baneshwor, Kathmandu",
    type: "OUTDOOR",
    rating: 4.5,
    price: 1500,
    image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=600&q=80",
  },
  {
    id: 5,
    name: "Ace Badminton Academy",
    location: "Sanepa, Lalitpur",
    type: "INDOOR",
    rating: 4.7,
    price: 800,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
  },
  {
    id: 6,
    name: "Bhaktapur Youth Grounds",
    location: "Suryabinayak, Bhaktapur",
    type: "OUTDOOR",
    rating: 4.4,
    price: 1000,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
  },
];

const TOTAL_VENUES = 42;

// ── VenueCard component ──────────────────────────────────────────────────────
function VenueCard({ venue }) {
  return (
    <div className="venue-card">
      {/* Image area */}
      <div className="venue-card__image-wrap">
        <img src={venue.image} alt={venue.name} className="venue-card__image" />

        {/* Badge: INDOOR / OUTDOOR / ROOFTOP */}
        <span className="venue-card__badge">{venue.type}</span>

        {/* Star rating */}
        <span className="venue-card__rating">★ {venue.rating}</span>
      </div>

      {/* Text content */}
      <div className="venue-card__body">
        <h3 className="venue-card__name">{venue.name}</h3>

        <p className="venue-card__location">
          <span className="venue-card__pin"></span> {venue.location}
        </p>

        <hr className="venue-card__divider" />

        <div className="venue-card__footer">
          <div className="venue-card__price-block">
            <span className="venue-card__per-hour">PER HOUR</span>
            <span className="venue-card__price">
              NPR {venue.price.toLocaleString()}
            </span>
          </div>

          <button className="venue-card__btn">VIEW SLOTS</button>
        </div>
      </div>
    </div>
  );
}

// ── VenueResults (main export) ───────────────────────────────────────────────
export default function VenueResults() {
  const [sortBy, setSortBy] = useState("Popularity");
  const [visibleCount, setVisibleCount] = useState(6);

  // Show only visibleCount venues
  const visibleVenues = venues.slice(0, visibleCount);

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + 6, venues.length));
  }

  return (
    <main className="results">
      {/* ── Header row ── */}
      <div className="results__header">
        <div className="results__title-block">
          <p className="results__eyebrow">Results Found</p>
          <h1 className="results__title">Top Venues in Kathmandu</h1>
        </div>

        {/* Sort dropdown */}
        <div className="results__sort">
          <label className="results__sort-label" htmlFor="sort">
            Sort by:
          </label>
          <select
            id="sort"
            className="results__sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {/* ── Venue grid ── */}
      <div className="results__grid">
        {visibleVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>

      {/* ── Footer: count + load more ── */}
      <div className="results__load-more-section">
        <p className="results__count">
          Showing {visibleVenues.length} of {TOTAL_VENUES} venues
        </p>
        <button
          className="results__load-more-btn"
          onClick={handleLoadMore}
          disabled={visibleCount >= venues.length}
        >
          LOAD MORE RESULTS
        </button>
      </div>
    </main>
  );
}