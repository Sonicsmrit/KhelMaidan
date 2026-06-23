import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import BookingPage from './pages/booking_page'
import Venues from './pages/venues'
import SignIn from './pages/signin'
import VenueOwnerlogin from './pages/Venue_owner_login'
import Support from "./pages/support"
import OwnerDashboard from './pages/owner_dashboard'
import UserSignup from './pages/Signup'
import AboutUs from './pages/about'
import Terms from './pages/terms'
import Privacy from './pages/privacy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venue-owner-login" element={<VenueOwnerlogin />} />
        <Route path="/support" element={<Support />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App