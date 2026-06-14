import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './components/AboutUs'
import ContactSupport from './components/ContactSupport'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import Booking from './components/Booking'
import Search from './pages/search'
import Venues from './pages/venues'
import SignIn from './pages/signin'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSupport />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/search" element={<Search />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App