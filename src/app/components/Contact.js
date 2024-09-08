// components/Contact.js
const Contact = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
          <form className="bg-white p-8 shadow-lg">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
              <input className="w-full p-3 border border-gray-300" type="text" id="name" placeholder="Name" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input className="w-full p-3 border border-gray-300" type="email" id="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-3 border border-gray-300" id="message" rows="5" placeholder="Your message..."></textarea>
            </div>
            <button className="px-6 py-3 bg-black text-white text-lg font-semibold" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  