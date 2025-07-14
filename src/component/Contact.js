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
    <div className="max-w-xl mx-auto mt-16 bg-gray-100 p-10 rounded-xl shadow-2xl font-sans">
  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

  {submitted ? (
    <div className="text-center text-green-600 text-lg mt-4">✅ Thank you! We’ll respond soon.</div>
  ) : (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-300"
      ></textarea>
      <button
        type="submit"
        className="bg-red-600 text-white py-3 px-4 rounded-lg text-base hover:bg-red-700 transition"
      >
        Send Message
      </button>
    </form>
  )}

  <div className="text-center text-gray-600 mt-8 space-y-2">
    <p>📧 support@devivary.in</p>
    <p>📞 +91 98765 43210</p>
    <p>📍 Chennai, Tamil Nadu</p>
  </div>
</div>

  );
};

export default Contact