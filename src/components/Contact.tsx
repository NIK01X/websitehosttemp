import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact
        </h2>
        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-md border bg-transparent px-4 py-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-md border bg-transparent px-4 py-3"
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            className="md:col-span-2 w-full rounded-md border bg-transparent px-4 py-3 min-h-40"
            required
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
