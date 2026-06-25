import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VenueResults.css";

const staticVenues = [
  { id: 1, name: "Kickoff Arena Koteshwor", location: "Koteshwor, Kathmandu", type: "INDOOR", sport: "Football", city: "Kathmandu", rating: 4.8, price: 1200, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80" },
  { id: 2, name: "Mulpani Sports Complex", location: "Mulpani, Kathmandu", type: "OUTDOOR", sport: "Cricket", city: "Kathmandu", rating: 4.6, price: 2500, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80" },
  { id: 3, name: "Lalitpur Hoops Center", location: "Jhamsikhel, Lalitpur", type: "INDOOR", sport: "Basketball", city: "Lalitpur", rating: 4.9, price: 1800, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80" },
  { id: 4, name: "Skyline Futsal Hub", location: "Baneshwor, Kathmandu", type: "ROOFTOP", sport: "Football", city: "Kathmandu", rating: 4.5, price: 1500, image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=600&q=80" },
  { id: 5, name: "Ace Badminton Academy", location: "Sanepa, Lalitpur", type: "INDOOR", sport: "Badminton", city: "Lalitpur", rating: 4.7, price: 800, image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80" },
  { id: 6, name: "Bhaktapur Youth Grounds", location: "Suryabinayak, Bhaktapur", type: "OUTDOOR", sport: "Football", city: "Bhaktapur", rating: 4.4, price: 1000, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
];



const check_signin = () =>{

  if(!isOwner || !isUser){
    return navigate("/signin", { state: { venue } })
  }
  
  
}

function VenueCard({ venue }) {
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(false)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const loggedInOwner = localStorage.getItem('loggedInOwner')
    const LoggedIn = localStorage.getItem('loggedIn')

    if (loggedInOwner) {
        setIsOwner(true)
    }

    if(LoggedIn){
        setIsUser(true)
    }

  }, [])

  const check_signin = () => {
    if (!isOwner && !isUser) {
      navigate("/signin");
      return;
    }
    navigate(`/booking`, { state: { venue } });
  };


  return (
    <div className="venue-card">
      <div className="venue-card__image-wrap">
        <img src={venue.image} alt={venue.name} className="venue-card__image" />
        <span className="venue-card__badge">{venue.type}</span>
        <span className="venue-card__rating">★ {venue.rating ?? 'New'}</span>
      </div>
      <div className="venue-card__body">
        <h3 className="venue-card__name">{venue.name}</h3>
        <p className="venue-card__location">{venue.location}</p>
        <hr className="venue-card__divider" />
        <div className="venue-card__footer">
          <div>
            <span className="venue-card__per-hour">PER HOUR</span>
            <span className="venue-card__price">NPR {(venue.price || 0).toLocaleString()}</span>
          </div>
          <button
            className="venue-card__btn"
            onClick={check_signin}
          >
            VIEW SLOTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VenueResults({ venues = staticVenues, selectedSport, kathmandu, lalitpur, bhaktapur, price, courtType }) {
  const [sortBy, setSortBy] = useState("Popularity");

  const ownerVenues = JSON.parse(localStorage.getItem('ownerData') || '[]')
    .filter(o => o.Venuename)
    .map((o, i) => ({
      id: `owner-${i}`,
      name: o.Venuename,
      location: `${o.District || ''}`,
      type: o.PrimarySport || 'INDOOR',
      city: o.District || '',
      sport: o.PrimarySport
        ? o.PrimarySport.charAt(0).toUpperCase() + o.PrimarySport.slice(1)
        : '',
      rating: null,
      price: parseInt(o.pricing) || 0,
      image: o.image || null,
    }));

  const allVenues = [...venues, ...ownerVenues];

  let filtered = allVenues.filter((venue) => {
    if (selectedSport && venue.sport !== selectedSport) return false;
    const cityAllowed =
      (kathmandu && venue.city === "Kathmandu") ||
      (lalitpur  && venue.city === "Lalitpur")  ||
      (bhaktapur && venue.city === "Bhaktapur");
      
    if (!cityAllowed) return false;
    if (price && venue.price > price) return false;
    if (courtType === "Indoor Only"  && venue.type !== "INDOOR")  return false;
    if (courtType === "Outdoor Only" && venue.type !== "OUTDOOR") return false;
    return true;
  });

  const sorted = [...filtered];
  if (sortBy === "Price: Low to High") sorted.sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High to Low") sorted.sort((a, b) => b.price - a.price);
  if (sortBy === "Rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <main className="results">
      <div className="results__header">
        <div>
          <p className="results__eyebrow">Results Found</p>
          <h1 className="results__title">Top Venues in Kathmandu</h1>
        </div>
        <div className="results__sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" className="results__sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="results__grid">
        {sorted.length === 0 ? (
          <p style={{ color: "#aaa" }}>No venues match your filters.</p>
        ) : (
          sorted.map((venue) => <VenueCard key={venue.id} venue={venue} />)
        )}
      </div>
    </main>
  );
}