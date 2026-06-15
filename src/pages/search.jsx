import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import VenueContent from "../components/venuecontent.jsx";

function Search() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [kathmandu, setKathmandu] = useState(true);
  const [lalitpur, setLalitpur] = useState(false);
  const [bhaktapur, setBhaktapur] = useState(false);
  const [price, setPrice] = useState(5000);
  const [courtType, setCourtType] = useState("All Types");

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", alignItems: "flex-start", backgroundColor: "#0a0a0a" }}>
        <Sidebar
          selectedSport={selectedSport}   setSelectedSport={setSelectedSport}
          kathmandu={kathmandu}           setKathmandu={setKathmandu}
          lalitpur={lalitpur}             setLalitpur={setLalitpur}
          bhaktapur={bhaktapur}           setBhaktapur={setBhaktapur}
          price={price}                   setPrice={setPrice}
          courtType={courtType}           setCourtType={setCourtType}
        />
        <VenueContent
          selectedSport={selectedSport}
          kathmandu={kathmandu}
          lalitpur={lalitpur}
          bhaktapur={bhaktapur}
          price={price}
          courtType={courtType}
        />
      </div>
      <Footer />
    </>
  );
}

export default Search;