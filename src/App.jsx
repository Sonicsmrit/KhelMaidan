import SignIn from './components/SignIn'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import Venues from './pages/venues'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App