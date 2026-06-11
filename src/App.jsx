import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import Venues from './pages/venues'
import SignIn from '.pages/signin'
import Login from '.pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App