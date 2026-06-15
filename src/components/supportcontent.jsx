import "../styles/support.css";

const faqs = [
  { question: "How do I book a venue?", answer: "Browse venues on the Search page, click VIEW SLOTS on a venue you like, pick a time slot, and confirm your booking." },
  { question: "What payment methods are accepted?", answer: "We accept eSewa, Khalti, and bank transfers." },
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

        <div className="support-contact">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <p>📧 support@khelmaidan.com</p>
            <p>📞 +977 9812345678</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Supportcontent;