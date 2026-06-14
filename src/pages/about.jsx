import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Furina from '../assets/furina.webp'

function AboutUs(){
    return(
        <>
            <Navbar />
            <div className='page'>
                <p>

                    We are KhelMaidan Devs!
                    <br/>
                    Ryan hart wishes he was us. 
                    <br/><br/>

                    We are the Builder of this website! WE!

                    Yes thats right. We made this.<br/> <br/>
                    
                    Brick by Brick.<br/><br/>

                    For the love of the GAME.

                    We made it work we made it shine, for we are KhelMaidan Devs.
                    <br/><br/> 


                    Also Furina is a part of the team

                </p>

                <img src={Furina} alt="Thats the girl!"/>
            </div>


            
            <Footer />
        </>
    )
}

export default AboutUs