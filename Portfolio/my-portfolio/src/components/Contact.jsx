
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-400">Contact Me</h2>
        <p className="mt-4 text-gray-300 text-lg">Let's connect! Feel free to reach out.</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-gray-700 focus:border-indigo-400"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4 border border-gray-700 focus:border-indigo-400"/>
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-400"></textarea>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-white font-bold shadow-lg transform hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
