import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Furina from '../assets/furina.webp'

function Terms(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <p>Terms of Service — Last updated: June 2026</p>
                <br/>

                <p>By accessing KhelMaidan, you agree to be bound by these terms. If you disagree, please close the tab and reconsider your life choices.</p>
                <br/>

                <p>You may use KhelMaidan solely for the purpose of booking sports venues. Any attempt to use this platform for non-sports related activities will be met with extreme disappointment from our entire team.</p>
                <br/>

                <p>Once a booking is confirmed, it is your responsibility to show up. The court does not care about your excuses. Neither do we. Cancellations must be made in advance or the venue owner reserves the right to be upset about it.</p>
                <br/>

                <p>Venue owners are responsible for keeping their listings accurate. If your court has a giant hole in it, please mention that. We are not liable for anything that happens on the actual ground. We just connect people.</p>
                <br/>

                <p>You are responsible for your account. Do not share your password. Do not make a fake account. Do not be weird about it.</p>
                <br/>

                <p>KhelMaidan, its logo, its name, and its general vibe are owned by us. You may not copy, reproduce, or attempt to rebrand this as your own project. We will know.</p>
                <br/>

                <p>KhelMaidan is not responsible for injuries, arguments, or any drama that occurs on or off the court. You came here to play. Play responsibly.</p>
                <br/>

                <p>We reserve the right to update these terms at any time. We will not notify you. Check back occasionally if you care.</p>
                <br/>

                <p>Also Furina is our God</p>

                <img src={Furina} alt="Thats the girl!"/>
            </div>


            
            <Footer />
        </>
    )
}

export default Terms