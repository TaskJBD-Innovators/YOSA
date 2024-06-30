import React from 'react';
import  '../Styles/Contact.css'

const ContactUs = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="relative">
        <img
          src="https://placehold.co/1920x400"
          alt="Header Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white">Contact Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        <section className="flex flex-col md:flex-row justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Send Me A Message</h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full md:w-1/2 p-2 border border-input rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full md:w-1/2 p-2 border border-input rounded"
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full md:w-1/2 p-2 border border-input rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full md:w-1/2 p-2 border border-input rounded"
                />
              </div>
              <textarea
                placeholder="Type Your Message Here..."
                className="w-full p-2 border border-input rounded h-32"
              ></textarea>
              <button className="bg-primary text-primary-foreground p-2 rounded hover:bg-primary/80">
                Send Message
              </button>
            </form>
          </div>

          {/* Address Section */}
          <div className="w-full md:w-1/3 bg-card p-6 rounded-lg shadow-md mt-8 md:mt-0 md:ml-4">
            <h2 className="text-2xl mb-4">Address</h2>
            <p>
              Queen Chimney Effluent Discharge System Lorem Ipsum, Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.
            </p>
            <p className="mt-4">
              <strong>Location:</strong> 457 Washington Ave Manchester, Kentucky
              39495
            </p>
            <p>
              <strong>Phone:</strong> (906) 765-4321
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@website.com" className="text-primary">
                contact@website.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
