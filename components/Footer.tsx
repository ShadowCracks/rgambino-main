import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cdz4bl6", // Replace with your Service ID
        "template_newsletter", // Replace with your Template ID
        { email: email },
        "JIT7wDfN9lboVIXNK" // Replace with your Public Key
      )
      .then(
        (response) => {
          setMessage("Subscription successful!");
          setEmail("");
        },
        (err) => {
          setMessage("Subscription failed. Please try again.");
        }
      );
  };

  return (
    <footer className="flex flex-col px-20 py-14 mt-0 w-full text-base text-white bg-blue-400 max-md:px-5 max-md:mt-0 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <p className="leading-6 w-[230px]">
          We make sure to give your car the pampering it deserves in BubBlast.
        </p>
        <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
            <nav className="flex flex-col">
              <h3 className="font-bold">Company</h3>
              <ul className="flex flex-col mt-6">
                <li className="opacity-75">
                  <a href="AboutUs">About Us</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="Services">Our Services</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="Pricing">Pricing Plan</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="ContactUs">Work with Us</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="Blog">Automotive Blog</a>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col">
              <h3 className="font-bold">Support</h3>
              <ul className="flex flex-col mt-6">
                <li className="opacity-75">
                  <a href="#faq">Service FAQ</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="#user-policy">User Policy</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="#members">Members Policy</a>
                </li>
                <li className="mt-2 opacity-75">
                  <a href="#support">Customer Support</a>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col">
              <h3 className="font-bold">Contact</h3>
              <ul className="flex flex-col mt-6">
                <li className="mt-2 opacity-75">
                  <a href="https://www.instagram.com/the_galactic_shine?igsh=MTQwbnA3bjA3YzE2ZQ==">Instagram</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col min-w-[240px]">
            <div className="flex flex-col self-start">
              <h3 className="font-bold">Newsletter</h3>
              <p className="mt-6 opacity-75">
                Subscribe to get monthly promo updates.
              </p>
            </div>
            <form
              className="flex gap-10 items-start pb-4 mt-24 border-b border-solid border-b-white max-md:mt-10"
              onSubmit={handleNewsletterSubmit}
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="opacity-50 bg-transparent border-none"
              />
              <button type="submit" className="font-bold text-right">
                Subscribe
              </button>
            </form>
            {message && <p className="mt-2">{message}</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <p className="opacity-50">Copyright © 2023. All rights reserved.</p>
        <p className="text-right opacity-50">
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms & Condition</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
