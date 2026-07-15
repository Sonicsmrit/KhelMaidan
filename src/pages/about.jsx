import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Furina from '../assets/furina.webp'

function AboutUs(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <p>About Us — Est. sometime in 2026</p>
                <br/>

                <p>KhelMaidan was built because booking a futsal court in Nepal used to require ten phone calls, three "call back later"s, and a venue that was somehow already taken by the time you showed up. We got tired of it. So we fixed it.</p>
                <br/>

                <p>We are a small team of developers who also happen to play the sports we built this for. This is important context. We are not a faceless corporation that googled "how do sports work" — we have personally shown up to a court that was double-booked and we have personally been furious about it.</p>
                <br/>

                <p>Our mission is simple: real-time availability, instant confirmations, and venues across Nepal, all in one place. No middlemen, no guesswork, no mysterious "the owner will call you back" black hole.</p>
                <br/>

                <p>We built this brick by brick, feature by feature, bug by bug (RIP to the bugs, we fixed most of you). Every part of this platform exists because something annoyed us enough to write code about it.</p>
                <br/>

                <p>We do not have a mission statement written by a consulting firm. We have a working booking system and a mild obsession with making it better.</p>
                <br/>

                <p>If you have feedback, we will read it. If you have a complaint, we will consider it, briefly, before returning to work.</p>
                <br/>

                <p>For the love of the game. Also Furina is part of the team.</p>

            </div>
            
            <Footer />
        </>
    )
}

export default AboutUs