import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Furina from '../assets/furina.webp'

function Privacy(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <p>Privacy Policy — Last updated: June 2026</p>
                <br/>

                <p>Welcome to KhelMaidan's Privacy Policy. We know you won't read this. We wrote it anyway.</p>
                <br/>

                <p>When you create an account, we collect your name, email, and password. We store this in localStorage like responsible developers. Your data lives in your own browser. We cannot see it. We do not want to see it. Please do not tell us your password.</p>
                <br/>

                <p>When a venue owner registers, we collect their venue details, contact information, and district. This is used to display their listing to users. We are not doing anything suspicious with it. We are just showing courts to people who want to play sports.</p>
                <br/>

                <p>We do not sell your data. We do not have advertisers. We do not have a data team. We are students building a sports booking platform. Calm down.</p>
                <br/>

                <p>We do not use cookies to track you. We do not run analytics on your behavior. We do not care what time you log in or how long you spend looking at futsal courts. That is your business.</p>
                <br/>

                <p>If you delete your account, your data is gone. We cannot recover it. We will not try to recover it. It is gone. Goodbye.</p>
                <br/>

                <p>We reserve the right to update this policy whenever we feel like it. You will not be notified. You are already not reading this so it does not matter.</p>
                <br/>

                <p>Also Furina protects your data personally.</p>

            </div>
            <Footer />
        </>
    )
}

export default Privacy