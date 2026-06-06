import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
import Venues from './pages/venues'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/venues" element={<Venues />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
