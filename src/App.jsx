import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import Venues from './pages/venues'
import SignIn from './pages/signin'
import VenueOwnerlogin from './pages/Venue_owner_login'
import OwnerDashboard from './pages/owner_dashboard'
// import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venue-owner-login" element={<VenueOwnerlogin />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App