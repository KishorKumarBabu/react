const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 p-10 bg-gray-200 rounded-xl shadow-lg font-sans animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white p-6 mb-6 rounded-lg border-l-4 border-red-200">
        <h1 className="text-3xl font-semibold text-red-600 mb-2">
          Welcome to Zapeats
        </h1>
        <p className="text-gray-700">
          Your Zapeats partner for fresh food, fast service, and smarter
          choices.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white p-6 mb-6 rounded-lg border-l-4 border-red-200">
        <h2 className="text-xl font-semibold mb-2">🚀 Our Mission</h2>
        <p className="text-gray-700">
          Delivering food with speed and responsibility using smart logistics
          and a human touch.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white p-6 mb-6 rounded-lg border-l-4 border-red-200">
        <h2 className="text-xl font-semibold mb-4">✨ Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✅ Real-time order tracking</li>
          <li>✅ Partnered with top restaurants</li>
          <li>✅ Eco-friendly packaging</li>
          <li>✅ Lightning-fast delivery under 30 minutes</li>
        </ul>
      </section>

      {/* Our Story */}
      <section className="bg-white p-6 my-6 rounded-lg border-l-4 border-red-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">📖 Our Story</h2>
        <p className="text-gray-700">
          Zapeats started with a passion to bridge the gap between food lovers
          and their favorite restaurants. What began as a small local service
          has now expanded across cities, delivering thousands of meals daily
          with care and speed.
        </p>
      </section>

      {/* Vision */}
      <section className="bg-white p-6 my-6 rounded-lg border-l-4 border-red-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🌍 Our Vision</h2>
        <p className="text-gray-700">
          To become India’s most customer-centric food delivery platform —
          powered by technology, driven by people.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-white p-6 my-6 rounded-lg border-l-4 border-red-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">💡 Our Core Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong className="text-red-600">Customer First:</strong> Every
            decision is made keeping you in mind.
          </li>
          <li>
            <strong className="text-red-600">Transparency:</strong> We believe
            in open pricing and honest delivery practices.
          </li>
          <li>
            <strong className="text-red-600">Innovation:</strong> We constantly
            adapt and upgrade to serve you better.
          </li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="bg-white p-6 my-6 rounded-lg border-l-4 border-red-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">👨‍💻 Our Team</h2>
        <p className="text-gray-700">
          A diverse group of developers, delivery experts, and foodies — all
          united by one goal: delivering happiness, one order at a time.
        </p>
      </section>

      {/* Tech Section */}
      <section className="bg-white p-6 my-6 rounded-lg border-l-4 border-red-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">⚙️ Powered by Technology</h2>
        <p className="text-gray-700">
          From GPS-tracked deliveries to AI-powered route optimization, Zapeats
          runs on innovation. Our platform ensures efficiency at every
          touchpoint for users, partners, and riders.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8">
        © 2025 Zapeats | Built with 💙 by our team
      </footer>
    </div>
  );
};
export default About;
