import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import VenueContent from "../components/venuecontent.jsx";
function Search() {
    return(
      <>
        <Navbar />
        <div style={{ display: "flex", alignItems: "flex-start", backgroundColor: "#0a0a0a" }}>
        <Sidebar />
        <VenueContent />
      </div>
        <Footer />
      </> 
    
    )
}

// search page is under construction, so it will be added in the futures
export default Search