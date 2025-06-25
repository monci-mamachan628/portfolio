import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaCommentDots } from "react-icons/fa";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    const form = e.target;

    fetch("https://formspree.io/f/xrbkokbw", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset(); // Clear form
          setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5s
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("There was a problem submitting the form."));
  };

  return (
    <section id="contact" className="bg-background text-foreground py-10 px-4 md:px-8 lg:px-24">
      <div className="max-w-xl mx-auto bg-muted rounded-2xl p-8 shadow-2xl border border-purple-500">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">
          Let's Connect
        </h2>
        <p className="text-center mb-8 text-muted-foreground">
          I'm open to exciting data roles and collaborations. Reach out anytime!
        </p>

        {/* ✅ Success message */}
        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center border border-green-300">
            ✅ Thank You for your message! I will get back to you as soon as I can.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-purple-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-purple-500 rounded-lg"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-purple-500 rounded-lg"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-purple-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full pl-10 pr-4 py-3 bg-background border border-purple-500 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mx-auto transition"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-purple-400">
          <FaEnvelope className="inline mr-2" />
          <a href="mailto:moncimamachan8547@gmail.com" className="underline">
            moncimamachan8547@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
