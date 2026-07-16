import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const dummyReviews = [
    { name: "Aayush Shrestha", role: "Regular Player", rating: 5, text: '"Booking a futsal court used to be such a hassle. KhelMaidan made it a 2-minute job. Love it!"' },
    { name: "Priya Gurung", role: "Weekend Baller", rating: 4, text: '"Great selection of venues around Kathmandu. Wish there were more courts in Pokhara though."' },
    { name: "Rohan Thapa", role: "Futsal Team Captain", rating: 5, text: '"We book our weekly team practice through here now. No more calling venues and waiting for replies."' },
    { name: "Sujata Karki", role: "Court Owner", rating: 5, text: '"As a venue owner, managing bookings has never been this easy. Highly recommend the owner dashboard."' },
    { name: "Bibek Adhikari", role: "Basketball Enthusiast", rating: 4, text: '"Clean interface, quick payments, and reminders before my slot. What more do you need?"' },
];

export default function ReviewsSlider() {
    return (
        <section className="reviews-section">
        <h2 className="reviews-title">What Players Say</h2>
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
        >
            {dummyReviews.map((review, i) => (
            <SwiperSlide key={i}>
                <div className="review-card">
                <div className="review-stars">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                </div>
                <p className="review-text">{review.text}</p>
                <p className="review-name">{review.name}</p>
                <p className="review-role">{review.role}</p>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </section>
    );
}