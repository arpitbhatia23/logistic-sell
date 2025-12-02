import React from "react";
import { CheckCircle } from "lucide-react";

/**
 * Renders a confirmation message after a successful action (e.g., form submission).
 * Uses Tailwind CSS for a clean, centered, and modern look.
 */
const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-md w-full bg-white p-10 sm:p-12 rounded-2xl shadow-2xl border-t-4 border-teal-500 text-center transform transition duration-500 hover:shadow-3xl hover:scale-[1.01]">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-teal-500 bg-teal-50 rounded-full p-2" />
        </div>

        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 tracking-tight">
          Thank You!
        </h1>

        {/* Message Content */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We've successfully received your message and truly appreciate you
          reaching out.
          <br className="hidden sm:block" />
          Our team will be in touch with you shortly.
        </p>

        {/* Action Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 text-sm uppercase tracking-wider"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
