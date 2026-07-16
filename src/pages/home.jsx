import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/categories'
import Footer from '../components/footer'
import ReviewsSlider from '../components/reviews'

function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <ReviewsSlider />
        <Categories />
        <Footer />
        </>

    )
}
export default Home