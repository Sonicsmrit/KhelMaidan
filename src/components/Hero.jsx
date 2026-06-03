import BackgroundMotion from '../assets/baackgrounud_motion.jsx'

function Hero() {
    return (
        <section className="hero">
            <BackgroundMotion />

            <div className="hero-content">
                <span className="badge">ARENA ACCESS: ACTIVE</span>
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
                    <input type="text" placeholder="City Name" />
                    <input type="number" placeholder="MAX PRICE (NPR)" />
                    <button>Find Venues</button>
                </div>
            </div>
            
        </section>
        
)
}

export default Hero