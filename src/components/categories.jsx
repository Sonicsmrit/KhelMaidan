import {Link} from 'react-router-dom'

function Categories(){
    return(
        <section className="categories">
            <p className="section-label">CATEGORIES</p>
            <h2>PICK YOUR BATTLE</h2>

            <div className="category-layout">
            
                <div className="category-grid">

                    <Link to="/venue-owner-login"><div className="category-card football">Football</div></Link>
                    <Link to="/venue-owner-login"><div className="category-card basketball">Basketball</div></Link>
                    <Link to="/venue-owner-login"><div className="category-card badminton">Badminton</div></Link>
                    <Link to="/venue-owner-login"><div className="category-card cricket">Cricket</div></Link>

                    </div>
                <div className="Host_grid">
                    <h2>HOST YOUR VENUES</h2>
                    <p>Join Nepal's premier sports network and monetize your facility.</p>
                    <Link to="/venue-owner-login" className="btn">LIST MY ARENA</Link>
                </div>
            </div>

        </section>


    )

}

export default Categories