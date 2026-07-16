import "../styles/support.css";

const faqs = [
  { question: "How do I book a venue?", answer: "Browse venues on the Search page, click VIEW SLOTS on a venue you like, pick a time slot, and confirm your booking." },
  { question: "What payment methods are accepted?", answer: "We accept eSewa, Khalti, and bank transfers." },
  { question: "Can I cancel or reschedule a booking?", answer: "Yes, go to My Bookings, select the booking, and choose Cancel or Reschedule. Cancellations made at least 24 hours in advance are eligible for a full refund." },
  { question: "How do I know if my booking is confirmed?", answer: "You'll receive an on-screen confirmation and an email once your payment is processed. You can also check the status anytime under My Bookings." },
  { question: "What happens if a venue cancels my slot?", answer: "You'll be notified immediately and receive a full refund or the option to rebook another available slot at no extra cost." },
  { question: "Do I need an account to book a venue?", answer: "Yes, you need to sign up and log in to book a venue so we can keep track of your bookings and send confirmations." },
  { question: "Is there a mobile app for KhelMaidan?", answer: "Not yet. KhelMaidan currently works as a mobile-friendly website. A dedicated app is in the works." },
];

function Supportcontent() {
  return (
    <div className="support-page">

      <div className="support-hero">
        <p className="support-eyebrow">Help Center</p>
      </div>

      <div className="support-content">

        <div className="support-faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="support-contact-box">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <p>📧 support@khelmaidan.com</p>
            <p>📞 +977 9812345678</p>
            <p>📞 +977 9834567895</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Supportcontent;