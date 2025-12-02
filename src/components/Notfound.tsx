"use client";

import React from "react";
// Use Link from next/link for navigation
import Link from "next/link";
// Using the 'use client' directive since this page includes interactive elements and state (though minimal here)
// and will be rendered client-side by Next.js when it handles the 404 error.
// Note: Next.js 404 pages often don't need 'use client', but we keep it here to match previous component styles if any interactivity were added.

// This component is automatically rendered by Next.js when a 404 status is returned.
const NotFound: React.FC = () => {
  return (
    // Use a robust layout container that fills the viewport
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-50 p-4">
      {/* 404 Animation Image */}
      {/* We use a placeholder image for fallbacks as required by the instruction */}
      <img
        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
        alt="404 Page Not Found Animation"
        className="max-w-xs md:max-w-md w-full rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02]"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x300/4F46E5/FFFFFF?text=404+Error";
        }}
      />

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-700 mt-10 font-sans tracking-tight">
        404
      </h1>
      <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mt-2 font-sans">
        Page Not Found
      </h2>

      {/* Descriptive Text */}
      <p className="mt-4 text-lg text-gray-600 max-w-lg text-center font-inter">
        Sorry, the page you are looking for doesn't exist. It might have been
        moved, deleted, or you might have mistyped the address.
      </p>

      {/* Go Home Button */}
      {/* Use next/link and a strong, branded style */}
      <Link
        href="/"
        className="mt-8 px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
