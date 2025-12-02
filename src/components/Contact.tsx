"use client";

import React, { useState } from "react";
// Removed Next.js specific imports (useRouter from "next/navigation")
// and external icon library imports ("react-icons/fa" and "react-icons/fa6")

// --- Type Definitions (Interfaces) ---

/** Represents the shape of the form data. */
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// --- Component Definition ---

const Contact: React.FC = () => {
  // Removed useRouter initialization

  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // Submission status remains 'idle' or switches to 'success' or 'error'
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Type for the change event from an input/textarea element
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      // 1. Submit data to the Next.js API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // 2. Check for successful response from the API route
      if (!response.ok) {
        throw new Error("API submission failed. Status: " + response.status);
      }

      // 3. Handle success
      setSubmissionStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" }); // Clear form
      // Removed router.push for environment compatibility

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus("idle");
      }, 5000);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to display status messages
  const StatusMessage = () => {
    if (submissionStatus === "success") {
      return (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-4"
          role="alert"
        >
          <p className="font-bold">Success!</p>
          <p>Your message has been sent!</p>
        </div>
      );
    }
    if (submissionStatus === "error") {
      return (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4"
          role="alert"
        >
          <p className="font-bold">Error!</p>
          <p>
            Failed to send message. Please try again or check the console for
            details.
          </p>
        </div>
      );
    }
    return null;
  };

  // Inline SVG for Twitter/X
  const TwitterIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H364.5L252.3 313.6 157.7 464H82.4L245.3 283.7 64 48H187.6L291.6 200.5 389.2 48zM369.3 438.2l9.9-10.1-155.1-177.3-10.1 10.1 155.1 177.3zm-162-243L153.2 201 391 445.6l5.7-6.2-243.4-280z" />
    </svg>
  );

  // Inline SVG for LinkedIn
  const LinkedinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.4V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96.7 102.2 96.7c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.3 38.5-38.5 38.5zm282.8 243h-66.4V312c0-24.8-.5-56.5-34.5-56.5-34.5 0-39.8 27-39.8 54.8V416h-66.3V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.3 0 79.7 44 79.7 101.9V416z" />
    </svg>
  );

  // Inline SVG for WhatsApp
  const WhatsappIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M380.9 97.1C339 55.1 283.4 32 224 32c-51.7 0-99.7 13.9-140.8 39.8-41 25.9-74.9 61.3-97.7 103.5-22.8 42.1-34.2 89.9-34.2 138.8 0 58.7 14.9 114.1 43.6 163.6l-14.4 51.5 53.6-14.9c48.8 28 104.2 42 163.6 42h.1c110.1 0 199.3-89.2 199.3-199.3.1-59.4-13.8-115.6-39.8-160.7zM224.2 458.5h-.1c-48.4 0-94.6-12.7-135.5-37.1l-6.8-4-56.5 15.7 16.4-58.4-4-6.8c-24.5-40.9-37.2-87.1-37.2-135.5 0-46.7 11.2-89.9 33-128.5 21.8-38.6 51.4-71.3 87.7-93.5C124.6 69 173.8 56 224.2 56c42.8 0 83.1 11.1 119.5 33.1s68 53.2 89.8 93.4c21.8 40.2 33.1 85.8 33.1 133.3.1 94.6-76.5 171.3-171.1 171.3zm125.7-104.9c-2.4-1.2-14.5-7.2-16.7-8.1s-3.7-1.3-5.2 1.3c-1.6 2.5-6 7.2-7.3 8.7s-2.7 1.8-5 0c-18.4-9-43.7-27-63.5-45.7-15.6-14.3-26.2-32-29.4-37.4-3.2-5.4-.3-8.3 2.8-11s6.9-6.8 10.3-10.2c3.4-3.4 4.5-5.8 6.7-10.2s1.1-7.8-.6-10.9c-1.7-3.2-15.6-14.8-21.4-17.9s-9.9-4.8-14.5-4.8c-4.6 0-9.8.7-14.9.7s-11.4 1.5-17.4 7.6c-5.9 6.2-23.7 23.1-23.7 56.3s24.2 65.4 27.6 69.8c3.4 4.4 47.9 73.1 116.6 97.4 23.3 8.2 41.5 6.7 55.4 4.1 16.9-3.1 30.6-12.5 34.9-24.8s4.4-23.1 3.1-24.8c-1.3-1.7-5-2.7-10.5-5.5z" />
    </svg>
  );

  return (
    <section id="contact" className="bg-gray-200 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full" />
        <h3 className="m-8 text-gray-700">
          Get in touch with our logistics experts for all your transportation
          and fleet management needs.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-xl text-black shadow-2xl">
          <div className="bg-gray-900 rounded-t-xl text-yellow-400 p-8">
            <h1 className="text-3xl font-semibold">Send Us a Message</h1>
            <h2 className="text-gray-300">
              We'll get back to you within 24 hours.
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 py-6 container px-8"
          >
            <StatusMessage />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-150"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-150"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                onChange={handleChange}
                value={form.phone}
                className="w-full p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 outline-none transition duration-150"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                onChange={handleChange}
                value={form.message}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition duration-150"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 accent-yellow-500"
              />
              <label htmlFor="consent" className="text-gray-700">
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-[1.01] ${
                isSubmitting
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-md hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h1 className="text-2xl font-bold mb-6 text-black border-b pb-3 border-gray-100">
              Contact Information
            </h1>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 rounded-full p-3 text-yellow-400 shrink-0">
                  📞
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">
                    General Phone
                  </h2>
                  <p className="text-gray-600">
                    <a
                      href="tel:+xxxxxxxxxx"
                      className="hover:text-yellow-600 transition"
                      aria-label="call us on +91 85804-66164"
                    >
                      +91 xxxxx-xxxxx
                    </a>
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 rounded-full p-3 text-yellow-400 shrink-0">
                  ✉️
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">Email</h2>
                  <p className="text-gray-600">
                    <a
                      href="mailto:bussiness@gmail.com"
                      className="hover:text-yellow-600 transition"
                      aria-label="email us on bussiness@gmail.com "
                    >
                      bussiness@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 rounded-full p-3 text-yellow-400 shrink-0">
                  🕒
                </div>
                <div className="flex flex-col justify-center gap-1 text-gray-600">
                  <h2 className="font-semibold mb-1 text-neutral-800">
                    Business Hours
                  </h2>
                  <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                  <span>Saturday: 9:00 AM - 3:00 PM</span>
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <span className="text-2xl font-bold py-4 block text-black border-b pb-3 border-gray-100">
              Connect With Us
            </span>
            <div>
              <ul className="flex items-center gap-4 py-4">
                <li className="p-3 rounded-full bg-gray-900 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-gray-900 shadow-lg">
                  <a href="#" aria-label="X/Twitter Profile">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="p-3 rounded-full bg-gray-900 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-gray-900 shadow-lg">
                  <a href="#" aria-label="LinkedIn Profile">
                    <LinkedinIcon />
                  </a>
                </li>
                <li className="p-3 rounded-full bg-gray-900 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-gray-900 shadow-lg">
                  <a href="#" aria-label="WhatsApp Chat">
                    <WhatsappIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 rounded-xl shadow-2xl bg-white p-8 col-span-full">
        <h3 className="text-2xl font-bold mb-6 text-center text-black">
          Visit Our Headquarters
        </h3>
        <div className="relative h-96 rounded-xl overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="HeadQuarters Map"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.0267277259273!2d75.8364639750505!3d30.60940429188057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910e9ac54673627%3A0x64426543b57022e3!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1701350400000!5m2!1sen!2sin"
          ></iframe>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/dir//Ludhiana,+Punjab/@30.6094043,75.836464,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3910e9ac54673627:0x64426543b57022e3!2m2!1d75.836464!2d30.6094043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 font-medium hover:text-yellow-600 transition duration-300 p-3 rounded-lg bg-gray-100 hover:bg-gray-200"
            aria-label="Get Directions on Google Maps"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                clipRule="evenodd"
              />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
