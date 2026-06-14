import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './components/AboutUs'
import ContactSupport from './components/ContactSupport'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import Booking from './components/Booking'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App