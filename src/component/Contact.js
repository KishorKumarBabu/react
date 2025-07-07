import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="contactus-wrapper">
      <h2 className="contactus-title">Contact Us</h2>
      {submitted ? (
        <div className="contactus-thankyou">✅ Thank you! We’ll respond soon.</div>
      ) : (
        <form className="contactus-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}
      <div className="contactus-info">
        <p>📧 support@devivary.in</p>
        <p>📞 +91 98765 43210</p>
        <p>📍 Chennai, Tamil Nadu</p>
      </div>
    </div>
  );
};

export default Contact