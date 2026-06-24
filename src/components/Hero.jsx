import BackgroundMotion from '../assets/baackgrounud_motion.jsx'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()

    const handleFind = () => {
        const isOwner = localStorage.getItem('loggedInOwner')
        const isUser = localStorage.getItem('loggedIn')

        if (!isOwner && !isUser) {

            navigate('/signin')
            return

        }

        navigate('/search')
    }
    return (
        <section className="hero">
            <BackgroundMotion />

            <div className="hero-content">
                <span className="badge">BOOK THE BEST ARENAS</span>
                <h1>Own the <span className="green">Ground.</span></h1>
                <p>
                    The elite platform for athletes in Nepal. Book premium futsal courts, basketball
                    arenas, and cricket grounds in seconds. High-performance venues, real-time
                    availability.
                </p>
                <div className="search-bar">
                    <select>
                        <option value="">Select Sport</option>
                        <option value="FootBall">FootBall</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Volleyball">Volleyball</option>
                    </select>
                    <select>
                        <option value="">Select City</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Bhaktapur">Bhaktapur</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </select>
                    <input type="number" placeholder="MAX PRICE (NPR)" />
                    <button onClick={handleFind}>Find Venues</button>
                </div>
            </div>
            
        </section>
        
)
}

export default Hero