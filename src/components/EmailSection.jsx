import { useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID and Public Key
    const serviceId = "service_p7xh91m";
    const templateId = "template_836kyel";
    const publicKey = "gI8_civzKbk--ZfhX";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Claudio",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setEmailSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <>
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 z-0 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-zinc-50 my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-zinc-200 mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-grow gap-2">
            <a href="https://github.com/mclaudiod" target="_blank">
              <img className="w-14 h-14 m-2" src="/github.png" alt="Github Icon" />
            </a>
            <a
              href="hhttps://www.linkedin.com/in/claudio-morales-869b601b7/"
              target="_blank"
            >
              <img
                className="w-14 h-14 m-2 bg-white rounded-md p-1"
                src="/linkedin.png"
                alt="Linkedin Icon"
              />
            </a>
          </div>
        </div>
        <div className="z-10">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-zinc-50 block text-sm mb-2 font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-zinc-800 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Jacob"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-zinc-50 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-zinc-800 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-zinc-50 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-zinc-800 border border-zinc-700 placeholder-zinc-400 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-800 hover:bg-purple-900 text-zinc-50 font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
