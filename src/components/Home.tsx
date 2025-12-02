// components/HomeHero.tsx or app/page.tsx (if this is the main hero)

import React from "react";
// Import next/image for optimized background image handling
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

// Import the static image. Next.js automatically handles this and provides metadata.
import bg from "../assets/home.webp";

// --- Component Definition ---

// Define the component using React.FC
const HomeHero: React.FC = () => {
  // We remove the <link rel="preload"> tag as next/image handles preloading/fetching optimization automatically.
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 border-b-8 border-yellow-500">
      {/* Background Image using Next.js Image Component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Logistics background: trucks, shipping, and supply chain management"
          // Set layout/display style for the background image
          fill // Makes the image fill the parent container
          style={{ objectFit: "cover" }} // Ensures the image covers the area without distortion
          priority // Prioritize loading since this is the hero section
          quality={80} // Set image quality for balance between size and clarity
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white text-center max-w-7xl px-2 md:px-6 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
          Your Trusted Partner in Complete Logistics, Transportation & Fleet
          Management Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto font-light">
          Delivering excellence across North America with customized logistics
          solutions for businesses of all sizes
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="z-20 mt-8">
        <Link href="/contact" passHref>
          <button className="px-8 py-4 bg-yellow-400 text-black text-lg sm:text-xl md:text-2xl font-bold flex justify-center items-center rounded-lg hover:bg-yellow-500 hover:scale-[1.02] transition duration-300 ease-in-out shadow-lg">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Scroll Arrow at bottom center */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
        <FaArrowDown
          className="animate-bounce text-yellow-500 text-3xl"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default HomeHero; // Renamed to HomeHero to be more descriptive
